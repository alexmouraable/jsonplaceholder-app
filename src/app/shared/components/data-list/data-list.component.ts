import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent {
  @Input() values: any[];
  @Input() template: TemplateRef<any>;
  @Input() buttonShowMore: boolean;
  @Output() onLoadData: EventEmitter<void> = new EventEmitter<void>();

  onClickShowMore(): void {
    this.onLoadData.emit();
  }
}
