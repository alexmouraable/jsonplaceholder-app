import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { Slice } from 'src/app/data/models/slice.model';
import { Todo } from 'src/app/data/models/todo.model';
import { User } from 'src/app/data/models/user.model';
import { UserTodoService } from 'src/app/data/services/user-todo.service';

@Component({
  selector: 'app-list-user-todos',
  templateUrl: './list-user-todos.component.html',
  styleUrls: ['./list-user-todos.component.css']
})
export class ListUserTodosComponent implements OnInit {
  user: User;
  sliceOfTodos: Slice<Todo>;
  todos: Todo[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private userTodoService: UserTodoService
  ) { }

  ngOnInit() {
    this.user = this.activatedRoute.snapshot.data.userAndSliceOfTodos.user;
    this.sliceOfTodos = this.activatedRoute.snapshot.data.userAndSliceOfTodos.sliceOfTodos;
    this.todos = this.sliceOfTodos.values;
  }

  loadSliceOfTodos(): void {
    const start: number = this.sliceOfTodos.getNextStart();
    const end: number = this.sliceOfTodos.getNextEnd();

    this.userTodoService.getAll(this.user.id, start, end).pipe(take(1)).subscribe(sliceOfTodos => {
      this.sliceOfTodos = sliceOfTodos;
      this.todos = this.todos.concat(this.sliceOfTodos.values);
    });
  }

}
