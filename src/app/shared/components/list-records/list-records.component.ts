import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Record } from '../../models/record.model';

@Component({
  selector: 'app-list-records',
  templateUrl: './list-records.component.html',
  styleUrls: ['./list-records.component.css']
})
export class ListRecordsComponent {
  @Input() records: Record[];
  @Input() lazyLoading: boolean;
  @Input() hideButtonViewMoreWhen: boolean;
  @Output() onLoadRecords: EventEmitter<void> = new EventEmitter<void>();

  onClickViewMore(): void {
    this.onLoadRecords.emit();
  }
}
