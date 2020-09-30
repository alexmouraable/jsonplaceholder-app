import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Album } from '../models/album.model';
import { Slice } from '../models/slice.model';

@Injectable({
  providedIn: 'root'
})
export class UserAlbumService {
  private readonly endpoints = {
    count: (userId: number) => `${environment.apiRootUrl}/users/${userId}/albums`,
    getAll: (userId: number) => `${environment.apiRootUrl}/users/${userId}/albums`
  };

  constructor(private httpClient: HttpClient) { }

  count(userId: number): Observable<number> {
    return this.httpClient.get(this.endpoints.count(userId))
      .pipe(
        map((albums: Album[]) => albums.length)
      );
  }

  getAll(userId: number, start: number, end: number): Observable<Slice<Album>> {
    const params = {
      _start: String(start),
      _end: String(end)
    };

    const observe = 'response';

    return this.httpClient.get(this.endpoints.getAll(userId), { params, observe })
      .pipe(
        map((httpResponse: HttpResponse<Album[]>) => {
          const totalCount: number = parseInt(httpResponse.headers.get('x-total-count'));
          const albums: Album[] = httpResponse.body;
          return new Slice<Album>(start, end, totalCount, albums);
        })
      )
  }
}
