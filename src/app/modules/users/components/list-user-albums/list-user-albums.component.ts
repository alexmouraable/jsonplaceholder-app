import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { Album } from 'src/app/data/models/album.model';
import { Slice } from 'src/app/data/models/slice.model';
import { User } from 'src/app/data/models/user.model';
import { UserAlbumService } from 'src/app/data/services/user-album.service';

@Component({
  selector: 'app-list-user-albums',
  templateUrl: './list-user-albums.component.html',
  styleUrls: ['./list-user-albums.component.css']
})
export class ListUserAlbumsComponent implements OnInit {
  user: User;
  sliceOfAlbums: Slice<Album>;
  albums: Album[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private userAlbumService: UserAlbumService
  ) { }

  ngOnInit() {
    this.user = this.activatedRoute.snapshot.data.userAndSliceOfAlbums.user;
    this.sliceOfAlbums = this.activatedRoute.snapshot.data.userAndSliceOfAlbums.sliceOfAlbums;
    this.albums = this.sliceOfAlbums.values;
  }

  loadSliceOfAlbums(): void {
    const start: number = this.sliceOfAlbums.getNextStart();
    const end: number = this.sliceOfAlbums.getNextEnd();

    this.userAlbumService.getAll(this.user.id, start, end).pipe(take(1)).subscribe(sliceOfAlbums => {
      this.sliceOfAlbums = sliceOfAlbums;
      this.albums = this.albums.concat(this.sliceOfAlbums.values);
    });
  }
}
