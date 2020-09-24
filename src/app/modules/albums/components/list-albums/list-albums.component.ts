import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

import { Album } from 'src/app/data/models/album.model';
import { Slice } from 'src/app/data/models/slice.model';
import { AlbumService } from 'src/app/data/services/album.service';

@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.component.html',
  styleUrls: ['./list-albums.component.css']
})
export class ListAlbumsComponent implements OnInit {
  sliceOfAlbums: Slice<Album>;
  albums: Album[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private albumService: AlbumService,
  ) { }

  ngOnInit() {
    this.sliceOfAlbums = this.activatedRoute.snapshot.data.sliceOfAlbums;
    this.albums = this.sliceOfAlbums.values;
  }

  loadSliceOfAlbums(): void {
    const start: number = this.sliceOfAlbums.getNextStart();
    const end: number = this.sliceOfAlbums.getNextEnd();

    this.albumService.getAll(start, end).pipe(take(1)).subscribe(sliceOfAlbums => {
      this.sliceOfAlbums = sliceOfAlbums;
      this.albums = this.albums.concat(this.sliceOfAlbums.values);
    });
  }
}
