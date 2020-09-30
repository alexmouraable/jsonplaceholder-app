import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DefaultBoxDirective } from './directives/default-box.directive';
import { NameInitialsPipe } from './pipes/name-initials.pipe';
import { CountBoxComponent } from './components/count-box/count-box.component';
import { LabelComponent } from './components/label/label.component';
import { DataBoxComponent } from './components/data-box/data-box.component';
import { DataListComponent } from './components/data-list/data-list.component';
import { ValueWithIconComponent } from './components/value-with-icon/value-with-icon.component';
import { ListItemTemplateDirective } from './directives/list-item-template.directive';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { ListTodosComponent } from './components/list-todos/list-todos.component';
import { BasicUserInformationComponent } from './components/basic-user-information/basic-user-information.component';
import { SecondaryTitleComponent } from './components/secondary-title/secondary-title.component';
import { MainTitleComponent } from './components/main-title/main-title.component';

@NgModule({
  declarations: [
    DefaultBoxDirective,
    NameInitialsPipe,
    CountBoxComponent,
    LabelComponent,
    DataBoxComponent,
    DataListComponent,
    ValueWithIconComponent,
    ListItemTemplateDirective,
    ListPostsComponent,
    ListTodosComponent,
    BasicUserInformationComponent,
    SecondaryTitleComponent,
    MainTitleComponent
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
    LabelComponent,
    DataBoxComponent,
    DataListComponent,
    ValueWithIconComponent,
    ListItemTemplateDirective,
    ListPostsComponent,
    ListTodosComponent,
    BasicUserInformationComponent,
    SecondaryTitleComponent,
    MainTitleComponent
  ]
})
export class SharedModule { }
