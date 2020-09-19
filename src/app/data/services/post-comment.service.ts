import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Comment } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class PostCommentService {
  private readonly endpoints = {
    getAll: (postId: number) => `${environment.apiRootUrl}/posts/${postId}/comments`
  };

  constructor(private httpClient: HttpClient) { }

  getAll(postId: number): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(this.endpoints.getAll(postId));
  }
}
