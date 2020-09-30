import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { forkJoin, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Album } from 'src/app/data/models/album.model';
import { Photo } from 'src/app/data/models/photo.model';
import { Slice } from 'src/app/data/models/slice.model';
import { User } from 'src/app/data/models/user.model';
import { AlbumPhotoService } from 'src/app/data/services/album-photo.service';
import { AlbumService } from 'src/app/data/services/album.service';
import { UserService } from 'src/app/data/services/user.service';

@Injectable({
    providedIn: 'root'
})
export class AlbumResolver implements Resolve<{user: User, album: Album, sliceOfPhotos: Slice<Photo>}> {

    constructor(
        private albumService: AlbumService,
        private userService: UserService,
        private albumPhotoService: AlbumPhotoService
    ) { }

    resolve(activatedRouteSnapshot: ActivatedRouteSnapshot): Observable<{user: User, album: Album, sliceOfPhotos: Slice<Photo>}> {
        const albumId: number = activatedRouteSnapshot.params.albumId;
        const start: number = 0;
        const end: number = 12;

        return this.albumService.getById(albumId).pipe(
            switchMap(album => {
                return forkJoin({
                    user: this.userService.getById(album.userId),
                    album: of(album),
                    sliceOfPhotos: this.albumPhotoService.getAll(albumId, start, end)
                });
            })
        );
    }
    
}