import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Post } from '../models/post.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly endpoints = {
    getAll: () => `${environment.apiRootUrl}/posts`,
    getById: (id: number) => `${environment.apiRootUrl}/posts/${id}`
  };

  constructor(private httpClient: HttpClient) { }

  getAll(finalPosition: number): Observable<any> { 
    const params = {
      _end: finalPosition.toString()
    };

    const observe = 'response';

    return this.httpClient.get(this.endpoints.getAll(), { params, observe })
    .pipe(
        map((httpResponse: HttpResponse<Post[]>) => {
          const totalCount: number = parseInt(httpResponse.headers.get('x-total-count'));
          const posts: Post[] = httpResponse.body;
          const totalValues: number = posts.length;
          const nextFinalPosition: number = (finalPosition < totalCount) ? finalPosition + 5 : undefined;
          const lastFinalPosition: number = (finalPosition > 0) ? finalPosition - 5 : undefined;
          
          return {
            totalCount,
            totalValues,
            values: posts,
            nextFinalPosition,
            lastFinalPosition
          };
        })
      )
  }

  getById(id: number): Observable<Post> {
    return this.httpClient.get<Post>(this.endpoints.getById(id));
  }
}
