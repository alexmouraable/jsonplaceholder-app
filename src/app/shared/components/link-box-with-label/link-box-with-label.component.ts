import { Component, Input } from '@angular/core';
import { Label } from '../../models/label.model';

@Component({
  selector: 'app-link-box-with-label',
  templateUrl: './link-box-with-label.component.html',
  styleUrls: ['./link-box-with-label.component.css']
})
export class LinkBoxWithLabelComponent {
  @Input() header: string;
  @Input() link: string;
  @Input() label: Label;
}
