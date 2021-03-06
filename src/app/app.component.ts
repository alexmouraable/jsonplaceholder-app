import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, NavigationStart, Router } from '@angular/router';

import { SlimLoadingBarService } from '@cime/ngx-slim-loading-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private slimLoadingBarService: SlimLoadingBarService,
    private router: Router
  ) { }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.slimLoadingBarService.start()
      }

      if (event instanceof NavigationEnd) {
        this.slimLoadingBarService.complete();
      }
    });
  }
  
}