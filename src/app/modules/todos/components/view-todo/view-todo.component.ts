import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Todo } from 'src/app/data/models/todo.model';

@Component({
  selector: 'app-view-todo',
  templateUrl: './view-todo.component.html',
  styleUrls: ['./view-todo.component.css']
})
export class ViewTodoComponent implements OnInit {
  todo: Todo;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.todo = this.activatedRoute.snapshot.data.todo;
  }
}
