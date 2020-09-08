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

  constructor(private httpClient: HttpClient) { }

  getById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${environment.apiRootUrl}/users/${id}`);
  }

  getAll(finalPosition: number): Observable<any> {
    const params = {
      _end: finalPosition.toString()
    };

    const observe = 'response';

    return this.httpClient.get(`${environment.apiRootUrl}/users`, {
      params,
      observe
    }).pipe(
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

}
