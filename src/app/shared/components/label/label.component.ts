import { Component, Input } from '@angular/core';

import { Label } from '../../models/label.model';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent {
  @Input() label: Label;
}
