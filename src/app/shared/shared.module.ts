import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DefaultBoxDirective } from './directives/default-box.directive';
import { NameInitialsPipe } from './pipes/name-initials.pipe';
import { CountBoxComponent } from './components/count-box/count-box.component';
import { TextBoxWithLinkComponent } from './components/text-box-with-link/text-box-with-link.component';
import { LinkBoxWithLabelComponent } from './components/link-box-with-label/link-box-with-label.component';
import { LabelComponent } from './components/label/label.component';
import { DataBoxComponent } from './components/data-box/data-box.component';
import { DataListComponent } from './components/data-list/data-list.component';
import { ValueWithIconComponent } from './components/value-with-icon/value-with-icon.component';
import { LinkBoxComponent } from './components/link-box/link-box.component';
import { ListItemTemplateDirective } from './directives/list-item-template.directive';

@NgModule({
  declarations: [
    DefaultBoxDirective,
    NameInitialsPipe,
    CountBoxComponent,
    TextBoxWithLinkComponent,
    LinkBoxWithLabelComponent,
    LabelComponent,
    DataBoxComponent,
    DataListComponent,
    ValueWithIconComponent,
    LinkBoxComponent,
    ListItemTemplateDirective
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    DefaultBoxDirective,
    NameInitialsPipe,
    CountBoxComponent,
    FontAwesomeModule,
    RouterModule,
    TextBoxWithLinkComponent,
    LinkBoxWithLabelComponent,
    LabelComponent,
    DataBoxComponent,
    DataListComponent,
    ValueWithIconComponent,
    LinkBoxComponent,
    ListItemTemplateDirective
  ]
})
export class SharedModule { }
