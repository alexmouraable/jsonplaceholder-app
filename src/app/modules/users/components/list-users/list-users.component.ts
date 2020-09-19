import { Component, Input } from '@angular/core';
import { faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';

import { User } from 'src/app/data/models/user.model';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent {
  @Input() users: User[];
  readonly icons = {
    email: faMailBulk,
    phone: faPhone
  };

  constructor() { }
}
