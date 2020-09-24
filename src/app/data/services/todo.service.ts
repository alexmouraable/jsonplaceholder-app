import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Slice } from '../models/slice.model';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private readonly endpoints = {
    getAll: () => `${environment.apiRootUrl}/todos`
  };

  constructor(private httpClient: HttpClient) { }

  getAll(start: number, end: number): Observable<Slice<Todo>> {
    const params = {
      _start: String(start),
      _end: String(end)
    };

    const observe = 'response';

    return this.httpClient.get(this.endpoints.getAll(), { params, observe })
      .pipe(
        map((httpResponse: HttpResponse<Todo[]>) => {
          const totalCount: number = parseInt(httpResponse.headers.get('x-total-count'));
          const todos: Todo[] = httpResponse.body;
          return new Slice<Todo>(start, end, totalCount, todos);
        })
      )
  }
}
