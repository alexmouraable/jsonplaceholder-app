import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { Slice } from 'src/app/data/models/slice.model';
import { Todo } from 'src/app/data/models/todo.model';
import { TodoService } from 'src/app/data/services/todo.service';

@Component({
  selector: 'app-list-todos-container',
  templateUrl: './list-todos-container.component.html',
  styleUrls: ['./list-todos-container.component.css']
})
export class ListTodosContainerComponent implements OnInit {
  private sliceOfTodos: Slice<Todo>;
  private todos: Todo[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.sliceOfTodos = this.activatedRoute.snapshot.data.sliceOfTodos;
    this.todos = this.sliceOfTodos.values;
  }

  loadSliceOfTodos(): void {
    const start: number = this.sliceOfTodos.getNextStart();
    const end: number = this.sliceOfTodos.getNextEnd();

    this.todoService.getAll(start, end).pipe(take(1)).subscribe(sliceOfTodos => {
      this.sliceOfTodos = sliceOfTodos;
      this.todos = this.todos.concat(this.sliceOfTodos.values);
    });
  }
}
