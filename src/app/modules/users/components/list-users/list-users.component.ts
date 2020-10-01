import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';

import { take } from 'rxjs/operators';

import { Slice } from 'src/app/data/models/slice.model';
import { User } from 'src/app/data/models/user.model';
import { UserService } from 'src/app/data/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  @Input() users: User[];
  sliceOfUsers: Slice<User>;
  readonly icons = { email: faMailBulk, phone: faPhone };

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.sliceOfUsers = this.activatedRoute.snapshot.data.sliceOfUsers;
    this.users = this.sliceOfUsers.values;
  }

  loadSliceOfUsers(): void {
    const start: number = this.sliceOfUsers.getNextStart();
    const end: number = this.sliceOfUsers.getNextEnd();

    this.userService.getAll(start, end).pipe(take(1)).subscribe(sliceOfUsers => {
      this.sliceOfUsers = sliceOfUsers;
      this.users = this.users.concat(this.sliceOfUsers.values);
    });
  }
}
