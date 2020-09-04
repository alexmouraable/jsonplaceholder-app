import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-information-box-with-icon',
  templateUrl: './information-box-with-icon.component.html',
  styleUrls: ['./information-box-with-icon.component.css']
})
export class InformationBoxWithIconComponent {
  @Input() information: any;
  @Input('icon-path') iconPath: string;
}
