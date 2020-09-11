import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/data/models/user.model';
import { Slice } from 'src/app/data/models/slice.model';
import { UserService } from 'src/app/data/services/user.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-list-users-container',
  templateUrl: './list-users-container.component.html',
  styleUrls: ['./list-users-container.component.css']
})
export class ListUsersContainerComponent implements OnInit {
  sliceOfUsers: Slice<User>;
  users: User[];

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.sliceOfUsers = this.activatedRoute.snapshot.data.sliceOfUsers;
    this.users = this.sliceOfUsers.values;
  }

  loadSliceOfUsers(): void {
    const start: number = this.sliceOfUsers.getNextStart();
    const end: number = this.sliceOfUsers.getNextEnd();
    this.userService.getAll(start, end).pipe(take(1)).subscribe((sliceOfUsers: Slice<User>) => {
      this.sliceOfUsers = sliceOfUsers;
      this.users = this.users.concat(this.sliceOfUsers.values);
    });
  }
}
