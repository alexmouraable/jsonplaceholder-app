import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListAlbumsContainerComponent } from './components/list-albums-container/list-albums-container.component';
import { ViewAlbumComponent } from './components/view-album/view-album.component';
import { AlbumResolver } from './guards/album-resolver';
import { AlbumsResolver } from './guards/albums-resolver';

const routes: Routes = [
    {
        path: '',
        component: ListAlbumsContainerComponent,
        resolve: {
            sliceOfAlbums: AlbumsResolver
        }
    },
    {
        path: ':albumId',
        component: ViewAlbumComponent,
        resolve: {
            userAndAlbumAndSliceOfPhotos: AlbumResolver
        }
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AlbumsRoutingModule { }