import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserService } from 'src/app/data/services/user.service';
import { User } from 'src/app/data/models/user.model';

@Injectable({
    providedIn: 'root'
})
export class UserResolver implements Resolve<User> {

    constructor(private userService: UserService) { }

    resolve(activatedRouteSnapshot: ActivatedRouteSnapshot): Observable<User> {
        const userId: number = activatedRouteSnapshot.params.userId;
        return forkJoin({
            user: this.userService.getById(userId),
            statistics: this.userService.getStatistics(userId)
        }).pipe(
            map(userAndStatistics => {
                return {
                    ...userAndStatistics.user,
                   statistics: userAndStatistics.statistics
                }
            })
        );
    }

}