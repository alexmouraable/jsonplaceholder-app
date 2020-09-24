import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { take } from 'rxjs/operators';

import { Slice } from 'src/app/data/models/slice.model';
import { Todo } from 'src/app/data/models/todo.model';
import { TodoService } from 'src/app/data/services/todo.service';
import { Label } from 'src/app/shared/models/label.model';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  sliceOfTodos: Slice<Todo>;
  todos: Todo[];

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

  getLabel(todo: Todo): Label {
    return {
      backgroundColor: todo.completed ? '#1b8f06' : '#f70505',
      description: todo.completed ? 'Completa' : 'Incompleta',
      descriptionColor: '#FFF'
    }
  }
}
