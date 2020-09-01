import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reading-box',
  templateUrl: './reading-box.component.html',
  styleUrls: ['./reading-box.component.css']
})
export class ReadingBoxComponent {
  @Input() title: string;
  @Input() content: any;
}
