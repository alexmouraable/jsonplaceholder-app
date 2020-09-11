import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Post } from '../models/post.model';
import { environment } from 'src/environments/environment';
import { Slice } from '../models/slice.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly endpoints = {
    getAll: () => `${environment.apiRootUrl}/posts`,
    getById: (id: number) => `${environment.apiRootUrl}/posts/${id}`
  };

  constructor(private httpClient: HttpClient) { }

  getAll(start: number, end: number): Observable<Slice<Post>> { 
    const params = {
      _start: String(start),
      _end: String(end)
    };

    const observe = 'response';

    return this.httpClient.get(this.endpoints.getAll(), { params, observe })
      .pipe(
        map((httpResponse: HttpResponse<Post[]>) => {
          const totalCount: number = parseInt(httpResponse.headers.get('x-total-count'));
          const posts: Post[] = httpResponse.body;
          return new Slice<Post>(start, end, totalCount, posts);
        })
      )
  }

  getById(id: number): Observable<Post> {
    return this.httpClient.get<Post>(this.endpoints.getById(id));
  }
}
