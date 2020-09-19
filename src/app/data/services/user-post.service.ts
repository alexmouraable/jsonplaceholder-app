import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Post } from '../models/post.model';
import { Slice } from '../models/slice.model';

@Injectable({
  providedIn: 'root'
})
export class UserPostService {
  private readonly endpoints = {
    count: (userId: number) => `${environment.apiRootUrl}/users/${userId}/posts`,
    getAll: (userId: number) => `${environment.apiRootUrl}/users/${userId}/posts`
  };

  constructor(private httpClient: HttpClient) { }

  count(userId: number): Observable<number> {
    return this.httpClient.get(this.endpoints.count(userId))
      .pipe(
        map((posts: Post[]) => posts.length)
      );
  }

  getAll(userId: number, start: number, end: number): Observable<Slice<Post>> {
    const params = {
      _start: String(start),
      _end: String(end)
    };

    const observe = 'response';

    return this.httpClient.get(this.endpoints.getAll(userId), { params, observe })
      .pipe(
        map((httpResponse: HttpResponse<Post[]>) => {
          const totalCount: number = parseInt(httpResponse.headers.get('x-total-count'));
          const posts: Post[] = httpResponse.body;
          return new Slice<Post>(start, end, totalCount, posts);
        })
      )
  }
}
