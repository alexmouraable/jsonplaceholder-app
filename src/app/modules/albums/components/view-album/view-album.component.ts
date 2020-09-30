import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

import { Album } from 'src/app/data/models/album.model';
import { Photo } from 'src/app/data/models/photo.model';
import { Slice } from 'src/app/data/models/slice.model';
import { User } from 'src/app/data/models/user.model';
import { AlbumPhotoService } from 'src/app/data/services/album-photo.service';

@Component({
  selector: 'app-view-album',
  templateUrl: './view-album.component.html',
  styleUrls: ['./view-album.component.css']
})
export class ViewAlbumComponent implements OnInit {
  user: User;
  album: Album;
  sliceOfPhotos: Slice<Photo>;
  photos: Photo[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private albumPhotoService: AlbumPhotoService
  ) { }

  ngOnInit() {
    this.user = this.activatedRoute.snapshot.data.userAndAlbumAndSliceOfPhotos.user;
    this.album = this.activatedRoute.snapshot.data.userAndAlbumAndSliceOfPhotos.album;
    this.sliceOfPhotos = this.activatedRoute.snapshot.data.userAndAlbumAndSliceOfPhotos.sliceOfPhotos;
    this.photos = this.sliceOfPhotos.values;
  }

  loadSliceOfPhotos(): void {
    const start: number = this.sliceOfPhotos.getNextStart();
    const end: number = this.sliceOfPhotos.getNextEnd();

    this.albumPhotoService.getAll(this.album.id, start, end).pipe(take(1)).subscribe(sliceOfPhotos => {
      this.sliceOfPhotos = sliceOfPhotos;
      this.photos = this.photos.concat(this.sliceOfPhotos.values); 
    });
  }
}
