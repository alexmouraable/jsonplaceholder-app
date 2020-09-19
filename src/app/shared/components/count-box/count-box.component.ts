import { Component, Input } from '@angular/core';

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-count-box',
  templateUrl: './count-box.component.html',
  styleUrls: ['./count-box.component.css']
})
export class CountBoxComponent {
  @Input() description: string;
  @Input() count: number;
  @Input() icon: IconDefinition;
  @Input() route: string;
  @Input('button-description') buttonDescription: string;
}
