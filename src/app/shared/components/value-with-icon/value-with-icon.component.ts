import { Component, Input } from '@angular/core';

import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-value-with-icon',
  templateUrl: './value-with-icon.component.html',
  styleUrls: ['./value-with-icon.component.css']
})
export class ValueWithIconComponent {
  @Input() value: any;
  @Input() icon: IconDefinition;
}
