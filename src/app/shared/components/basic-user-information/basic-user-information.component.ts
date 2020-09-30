import { Component, Input } from '@angular/core';
import { faMailBulk, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';

import { User } from 'src/app/data/models/user.model';

@Component({
  selector: 'app-basic-user-information',
  templateUrl: './basic-user-information.component.html',
  styleUrls: ['./basic-user-information.component.css']
})
export class BasicUserInformationComponent {
  @Input() user: User;
  
  readonly icons = {
    username: faUser,
    email: faMailBulk,
    phone: faPhone
  };
}
