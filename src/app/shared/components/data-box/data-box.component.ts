import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-box',
  templateUrl: './data-box.component.html',
  styleUrls: ['./data-box.component.css']
})
export class DataBoxComponent {
  @Input() description: string;
  @Input() value: any;
}
