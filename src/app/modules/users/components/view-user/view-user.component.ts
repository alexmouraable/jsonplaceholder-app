import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from 'src/app/data/models/user.model';

import { faTasks, faPhotoVideo, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  user: User;
  icons = {
    posts: faEdit,
    tasks: faTasks,
    albums: faPhotoVideo
  };

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.user = this.activatedRoute.snapshot.data.user;
  }
}
