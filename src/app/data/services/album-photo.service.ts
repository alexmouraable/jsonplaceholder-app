import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Photo } from '../models/photo.model';
import { Slice } from '../models/slice.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumPhotoService {
  private readonly endpoints = {
    getAll: (albumId: number) => `${environment.apiRootUrl}/albums/${albumId}/photos`
  };

  constructor(private httpClient: HttpClient) { }

  getAll(albumId: number, start: number, end: number): Observable<Slice<Photo>> {
    const params = {
      _start: String(start),
      _end: String(end)
    };

    const observe = 'response';

    return this.httpClient.get(this.endpoints.getAll(albumId), { params, observe })
      .pipe(
        map((httpResponse: HttpResponse<Photo[]>) => {
          const totalCount: number = parseInt(httpResponse.headers.get('x-total-count'));
          const photos: Photo[] = httpResponse.body;
          return new Slice<Photo>(start, end, totalCount, photos);
        })
      );
  }
}
