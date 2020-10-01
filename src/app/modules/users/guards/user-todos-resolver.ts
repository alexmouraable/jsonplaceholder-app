import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { forkJoin, Observable } from 'rxjs';

import { Slice } from 'src/app/data/models/slice.model';
import { Todo } from 'src/app/data/models/todo.model';
import { User } from 'src/app/data/models/user.model';
import { UserTodoService } from 'src/app/data/services/user-todo.service';
import { UserService } from 'src/app/data/services/user.service';

@Injectable({
    providedIn: 'root'
})
export class UserTodosResolver implements Resolve<{user: User, sliceOfTodos: Slice<Todo>}> {

    constructor(
        private userService: UserService,
        private userTodoService: UserTodoService
    ) { }

    resolve(activatedRouteSnapshot: ActivatedRouteSnapshot): Observable<{user: User, sliceOfTodos: Slice<Todo>}> {
        const userId: number = activatedRouteSnapshot.params.userId;
        const start: number = 0;
        const end: number = 5;
        
        return forkJoin({
            user: this.userService.getById(userId),
            sliceOfTodos: this.userTodoService.getAll(userId, start, end)
        });
    }
}