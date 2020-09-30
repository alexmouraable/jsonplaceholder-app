import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-secondary-title',
  templateUrl: './secondary-title.component.html',
  styleUrls: ['./secondary-title.component.css']
})
export class SecondaryTitleComponent {
  @Input() title: string;
}
