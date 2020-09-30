import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { forkJoin, Observable } from 'rxjs';

import { Album } from 'src/app/data/models/album.model';
import { Slice } from 'src/app/data/models/slice.model';
import { User } from 'src/app/data/models/user.model';
import { UserAlbumService } from 'src/app/data/services/user-album.service';
import { UserService } from 'src/app/data/services/user.service';

@Injectable({
    providedIn: 'root'
})
export class UserAlbumsResolver implements Resolve<{user: User, sliceOfAlbums: Slice<Album>}> {

    constructor(
        private userService: UserService,
        private userAlbumService: UserAlbumService
    ) { }

    resolve(activatedRouteSnapshot: ActivatedRouteSnapshot): Observable<{user: User, sliceOfAlbums: Slice<Album>}> {
        const userId: number = activatedRouteSnapshot.params.userId;
        const start: number = 0;
        const end: number = 5;
        
        return forkJoin({
            user: this.userService.getById(userId),
            sliceOfAlbums: this.userAlbumService.getAll(userId, start, end)
        });
    }
    
}