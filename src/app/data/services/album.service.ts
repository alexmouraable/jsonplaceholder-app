import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Album } from '../models/album.model';
import { Slice } from '../models/slice.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private readonly endpoints = {
    getAll: () => `${environment.apiRootUrl}/albums`
  };

  constructor(private httpClient: HttpClient) { }

  getAll(start: number, end: number): Observable<Slice<Album>> {
    const params = {
      _start: String(start),
      _end: String(end)
    };

    const observe = 'response';

    return this.httpClient.get(this.endpoints.getAll(), { params, observe })
      .pipe(
        map((httpResponse: HttpResponse<Album[]>) => {
          const totalCount: number = parseInt(httpResponse.headers.get('x-total-count'));
          const todos: Album[] = httpResponse.body;
          return new Slice<Album>(start, end, totalCount, todos);
        })
      )
  }
}
