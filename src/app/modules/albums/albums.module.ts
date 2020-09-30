import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListAlbumsContainerComponent } from './components/list-albums-container/list-albums-container.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AlbumsRoutingModule } from './albums-routing.module';

@NgModule({
  declarations: [
    ListAlbumsContainerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AlbumsRoutingModule
  ]
})
export class AlbumsModule { }
