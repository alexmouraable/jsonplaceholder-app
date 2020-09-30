import { Component, Input } from '@angular/core';

import { Label } from '../../models/label.model';

@Component({
  selector: 'app-data-box',
  templateUrl: './data-box.component.html',
  styleUrls: ['./data-box.component.css']
})
export class DataBoxComponent {
  @Input() header: string;
  @Input() body: string | number;
  @Input() route: string;
  @Input() label: Label;
}
