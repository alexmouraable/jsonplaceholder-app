import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-box-with-link',
  templateUrl: './text-box-with-link.component.html',
  styleUrls: ['./text-box-with-link.component.css']
})
export class TextBoxWithLinkComponent {
  @Input() header: string;
  @Input() body: string;
  @Input() link: string;
}
