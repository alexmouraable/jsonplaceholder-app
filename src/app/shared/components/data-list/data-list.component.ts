import { AfterContentInit, Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

import { ListItemTemplateDirective } from '../../directives/list-item-template.directive';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements AfterContentInit {
  @Input() values: any[];
  @Input() buttonShowMore: boolean;
  @Output() onLoadData: EventEmitter<void> = new EventEmitter<void>();
  @ContentChild(ListItemTemplateDirective) listItemTemplateDirective: ListItemTemplateDirective;
  listItemTemplate: TemplateRef<any>;

  onClickShowMore(): void {
    this.onLoadData.emit();
  }

  ngAfterContentInit(): void {
    this.listItemTemplate = this.listItemTemplateDirective.listItemTemplate;
  }
}
