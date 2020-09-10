import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd } from '@angular/router';

import { SlimLoadingBarService } from '@cime/ngx-slim-loading-bar';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent implements OnInit {

  constructor(private slimLoadingBarService : SlimLoadingBarService, private router: Router) { }

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
