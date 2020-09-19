import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class UserPostService {
  private readonly endpoints = {
    count: (userId: number) => `${environment.apiRootUrl}/users/${userId}/posts`
  };

  constructor(private httpClient: HttpClient) { }

  count(userId: number): Observable<number> {
    return this.httpClient.get(this.endpoints.count(userId))
      .pipe(
        map((posts: Post[]) => posts.length)
      );
  }
}
