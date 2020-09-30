import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListAlbumsContainerComponent } from './components/list-albums-container/list-albums-container.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AlbumsRoutingModule } from './albums-routing.module';
import { ViewAlbumComponent } from './components/view-album/view-album.component';

@NgModule({
  declarations: [
    ListAlbumsContainerComponent,
    ViewAlbumComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AlbumsRoutingModule
  ]
})
export class AlbumsModule { }
