import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from './models/post.model';
import { Route } from '@angular/compiler/src/core';
import { Slice } from '../shared/models/slice.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  sliceOfPosts: Slice<Post[]>;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.sliceOfPosts = this.getSliceOfPosts();
  }

  private getSliceOfPosts(): Slice<Post[]> {
    return this.activatedRoute.snapshot.data.sliceOfPosts;
  }

}
