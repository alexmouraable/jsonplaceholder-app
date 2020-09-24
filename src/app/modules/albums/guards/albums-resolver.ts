import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable } from 'rxjs';

import { Album } from 'src/app/data/models/album.model';
import { Slice } from 'src/app/data/models/slice.model';
import { AlbumService } from 'src/app/data/services/album.service';

@Injectable({
    providedIn: 'root'
})
export class AlbumsResolver implements Resolve<Slice<Album>> {

    constructor(private albumService: AlbumService) { }

    resolve(): Observable<Slice<Album>> {
        const start: number = 0;
        const end: number = 5;

        return this.albumService.getAll(start, end);
    }
    
}