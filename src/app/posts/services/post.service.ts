import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Post } from '../models/post.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${environment.apiRootUrl}/posts`);
  }

  getById(id: number): Observable<Post> {
    return this.httpClient.get<Post>(`${environment.apiRootUrl}/posts/${id}`);
  }

}
