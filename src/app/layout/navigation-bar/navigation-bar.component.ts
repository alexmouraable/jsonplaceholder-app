import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  deviceWidth: number = window.innerWidth;
  isBigDevice: boolean = this.deviceWidth >= 992;
  isVisible: boolean = this.isBigDevice;
  toggleNavigationButtonIcon: IconDefinition;
  classNameRouterLinkActive: string = 'navigation-link-active';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.updateToggleNavigationButtonIcon();

    this.router.events.subscribe((event: Event) => {
      if(event instanceof NavigationEnd && !this.isBigDevice) {
        this.isVisible = false;
        this.updateToggleNavigationButtonIcon();
      }
    });
  }

  openNavigation(): void {
    this.isVisible = !this.isVisible;
    this.updateToggleNavigationButtonIcon();
  }

  updateToggleNavigationButtonIcon(): void {
    this.toggleNavigationButtonIcon = this.isVisible ? faTimes : faBars;
  }

  getLogoUrl(): string {
    return this.isBigDevice ? '../../../assets/images/JSONPlaceholderApp-Logo.png' : '../../../assets/images/JSONPlaceholderApp-SmallLogo.PNG';
  }
}
