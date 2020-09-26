import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appListItemTemplate]'
})
export class ListItemTemplateDirective {

  constructor(public listItemTemplate: TemplateRef<any>) { }

}
