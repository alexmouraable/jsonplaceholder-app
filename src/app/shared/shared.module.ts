import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { InformationBoxWithIconComponent } from './components/information-box-with-icon/information-box-with-icon.component';
import { ReadingBoxComponent } from './components/reading-box/reading-box.component';
import { DefaultBoxDirective } from './directives/default-box.directive';
import { NameInitialsPipe } from './pipes/name-initials.pipe';
import { CountBoxComponent } from './components/count-box/count-box.component';
import { ListRecordsComponent } from './components/list-records/list-records.component';
import { LabelComponent } from './components/label/label.component';

@NgModule({
  declarations: [
    InformationBoxWithIconComponent,
    ReadingBoxComponent,
    DefaultBoxDirective,
    NameInitialsPipe,
    CountBoxComponent,
    ListRecordsComponent,
    LabelComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    InformationBoxWithIconComponent,
    ReadingBoxComponent,
    DefaultBoxDirective,
    NameInitialsPipe,
    CountBoxComponent,
    FontAwesomeModule,
    RouterModule,
    ListRecordsComponent,
    LabelComponent
  ]
})
export class SharedModule { }
