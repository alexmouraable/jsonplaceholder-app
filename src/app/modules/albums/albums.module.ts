import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListAlbumsComponent } from './components/list-albums/list-albums.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AlbumsRoutingModule } from './albums-routing.module';

@NgModule({
  declarations: [
    ListAlbumsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AlbumsRoutingModule
  ]
})
export class AlbumsModule { }
