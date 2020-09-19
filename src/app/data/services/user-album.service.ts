import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Album } from '../models/album.model';

@Injectable({
  providedIn: 'root'
})
export class UserAlbumService {
  private readonly endpoints = {
    count: (userId: number) => `${environment.apiRootUrl}/users/${userId}/albums`
  };

  constructor(private httpClient: HttpClient) { }

  count(userId: number): Observable<number> {
    return this.httpClient.get(this.endpoints.count(userId))
      .pipe(
        map((albums: Album[]) => albums.length)
      );
  }
}
