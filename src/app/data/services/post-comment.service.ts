import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostCommentService {

  constructor(private httpClient: HttpClient) { }

  getAll(postId: number): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(`${environment.apiRootUrl}/posts/${postId}/comments`);
  }
  
}
