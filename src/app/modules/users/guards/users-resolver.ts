import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Slice } from 'src/app/data/models/slice.model';
import { UserService } from 'src/app/data/services/user.service';
import { User } from 'src/app/data/models/user.model';

@Injectable({
    providedIn: 'root'
})
export class UsersResolver implements Resolve<Slice<User>> {

    constructor(private userService: UserService) { }

    resolve(): Observable<Slice<User>> {
        const start: number = 0;
        const end: number = 5;
        
        return this.userService.getAll(start, end);
    }

}