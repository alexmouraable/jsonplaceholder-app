import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class UserTodoService {
  private readonly endpoints = {
    count: (userId: number) => `${environment.apiRootUrl}/users/${userId}/todos`
  };

  constructor(private httpClient: HttpClient) { }

  count(userId: number): Observable<number> {
    return this.httpClient.get(this.endpoints.count(userId))
      .pipe(
        map((todos: Todo[]) => todos.length)
      );
  }
}
