import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Album } from 'src/app/data/models/album.model';

@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.component.html',
  styleUrls: ['./list-albums.component.css']
})
export class ListAlbumsComponent {
  @Input() albums: Album[];
  @Input() buttonShowMore: boolean;
  @Output() onLoadData: EventEmitter<void> = new EventEmitter<void>();

  onClickShowMore(): void {
    this.onLoadData.emit();
  }
}
