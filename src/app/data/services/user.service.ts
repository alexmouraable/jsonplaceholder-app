import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';
import { Slice } from '../models/slice.model';
import { Statistics } from '../models/statistics.model';
import { UserPostService } from './user-post.service';
import { UserTodoService } from './user-todo.service';
import { UserAlbumService } from './user-album.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly endpoints = {
    getAll: () => `${environment.apiRootUrl}/users` ,
    getById: (userId: number) => `${environment.apiRootUrl}/users/${userId}`
  };

  constructor(
    private httpClient: HttpClient,
    private userPostService: UserPostService,
    private userTodoService: UserTodoService,
    private userAlbumService: UserAlbumService
  ) { }

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

  getById(userId: number): Observable<User> {
    return this.httpClient.get<User>(this.endpoints.getById(userId));
  }

  getStatistics(userId: number): Observable<Statistics> {
    return forkJoin({
      numberOfPosts: this.userPostService.count(userId),
      numberOfTodos:  this.userTodoService.count(userId),
      numberOfAlbums: this.userAlbumService.count(userId)
    }).pipe(
      map(numbers => {
        return {
          numberOfPosts: numbers.numberOfPosts,
          numberOfTodos: numbers.numberOfTodos,
          numberOfAlbums: numbers.numberOfAlbums
        }
      })
    );
  }
}
