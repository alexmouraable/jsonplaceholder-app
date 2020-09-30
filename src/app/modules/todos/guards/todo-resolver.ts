import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Todo } from 'src/app/data/models/todo.model';
import { User } from 'src/app/data/models/user.model';
import { TodoService } from 'src/app/data/services/todo.service';
import { UserService } from 'src/app/data/services/user.service';

@Injectable({
    providedIn: 'root'
})
export class TodoResolver implements Resolve<Todo> {

    constructor(
        private todoService: TodoService,
        private userService: UserService
    ) { }

    resolve(activatedRouteSnapshot: ActivatedRouteSnapshot): Observable<Todo> {
        const todoId: number = activatedRouteSnapshot.params.todoId;

        return this.todoService.getById(todoId).pipe(
            switchMap((todo: Todo) => {
                return this.userService.getById(todo.userId).pipe(
                    switchMap((user: User) => {
                        todo.user = user;
                        return of(todo);
                    })
                )
            })
        );
    }
}