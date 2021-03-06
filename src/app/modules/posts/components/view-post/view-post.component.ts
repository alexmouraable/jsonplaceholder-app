import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { faMailBulk, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';

import { Post } from 'src/app/data/models/post.model';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  post: Post;
  readonly icons = { user: faUser, email: faMailBulk, phone: faPhone };

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.post = this.activatedRoute.snapshot.data.post;
  }
}
