import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Todo } from '../models/todo.model';
import { Slice } from '../models/slice.model';

@Injectable({
  providedIn: 'root'
})
export class UserTodoService {
  private readonly endpoints = {
    count: (userId: number) => `${environment.apiRootUrl}/users/${userId}/todos`,
    getAll: (userId: number) => `${environment.apiRootUrl}/users/${userId}/todos`
  };

  constructor(private httpClient: HttpClient) { }

  count(userId: number): Observable<number> {
    return this.httpClient.get(this.endpoints.count(userId))
      .pipe(
        map((todos: Todo[]) => todos.length)
      );
  }

  getAll(userId: number, start: number, end: number): Observable<Slice<Todo>> {
    const params = {
      _start: String(start),
      _end: String(end)
    };

    const observe = 'response';

    return this.httpClient.get(this.endpoints.getAll(userId), { params, observe })
      .pipe(
        map((httpResponse: HttpResponse<Todo[]>) => {
          const totalCount: number = parseInt(httpResponse.headers.get('x-total-count'));
          const todos: Todo[] = httpResponse.body;
          return new Slice<Todo>(start, end, totalCount, todos);
        })
      )
  }
}
