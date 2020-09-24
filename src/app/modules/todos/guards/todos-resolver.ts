import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { Observable } from 'rxjs';

import { Slice } from 'src/app/data/models/slice.model';
import { Todo } from 'src/app/data/models/todo.model';
import { TodoService } from 'src/app/data/services/todo.service';

@Injectable({
    providedIn: 'root'
})
export class TodosResolver implements Resolve<Slice<Todo>> {

    constructor(private todoService: TodoService) { }

    resolve(): Observable<Slice<Todo>> {
        const start: number = 0;
        const end: number = 5;

        return this.todoService.getAll(start, end);
    }
    
}