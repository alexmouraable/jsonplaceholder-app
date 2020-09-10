import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly endpoints = {
    getAll: () => `${environment.apiRootUrl}/users` ,
    getById: (id: number) => `${environment.apiRootUrl}/users/${id}`
  };

  constructor(private httpClient: HttpClient) { }

  getAll(finalPosition: number): Observable<any> {
    const params = {
      _end: finalPosition.toString()
    };

    const observe = 'response';

    return this.httpClient.get(this.endpoints.getAll(), { params, observe })
      .pipe(
        map((httpResponse: HttpResponse<User[]>) => {
          const totalCount: number = parseInt(httpResponse.headers.get('x-total-count'));
          const users: User[] = httpResponse.body;
          const totalValues: number = users.length;
          const nextFinalPosition: number = (finalPosition < totalCount) ? finalPosition + 5 : undefined;
          const lastFinalPosition: number = (finalPosition > 0) ? finalPosition - 5 : undefined;
          
          return {
            totalCount,
            totalValues,
            values: users,
            nextFinalPosition,
            lastFinalPosition
          };
        })
      );
  }

  getById(id: number): Observable<User> {
    return this.httpClient.get<User>(this.endpoints.getById(id));
  }
}
