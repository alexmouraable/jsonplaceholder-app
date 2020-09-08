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
  sliceOfUsers: Slice<User[]>;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.sliceOfUsers = this.activatedRoute.snapshot.data.sliceOfUsers;
  }

  haveMoreUsers(): boolean {
    return this.sliceOfUsers.totalValues < this.sliceOfUsers.totalCount;
  }

  loadSliceOfUsers(): void {
    this.userService.getAll(this.sliceOfUsers.nextFinalPosition).pipe(take(1)).subscribe((sliceOfUsers: Slice<User[]>) => this.sliceOfUsers = sliceOfUsers);
  }
}
