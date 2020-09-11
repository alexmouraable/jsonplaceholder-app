import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';
import { Slice } from '../models/slice.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly endpoints = {
    getAll: () => `${environment.apiRootUrl}/users` ,
    getById: (id: number) => `${environment.apiRootUrl}/users/${id}`
  };

  constructor(private httpClient: HttpClient) { }

  getAll(start: number, end: number): Observable<Slice<User>> {
    const params = {
      _start: String(start),
      _end: String(end)
    };

    const observe = 'response';

    return this.httpClient.get(this.endpoints.getAll(), { params, observe })
      .pipe(
        map((httpResponse: HttpResponse<User[]>) => {
          const totalCount: number = parseInt(httpResponse.headers.get('x-total-count'));
          const users: User[] = httpResponse.body;
          return new Slice<User>(start, end, totalCount, users);
        })
      );
  }

  getById(id: number): Observable<User> {
    return this.httpClient.get<User>(this.endpoints.getById(id));
  }
}
