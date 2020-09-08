import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformationBoxWithIconComponent } from './components/information-box-with-icon/information-box-with-icon.component';
import { ReadingBoxComponent } from './components/reading-box/reading-box.component';
import { DefaultBoxDirective } from './directives/default-box.directive';
import { NameInitialsPipe } from './pipes/name-initials.pipe';

@NgModule({
  declarations: [
    InformationBoxWithIconComponent,
    ReadingBoxComponent,
    DefaultBoxDirective,
    NameInitialsPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InformationBoxWithIconComponent,
    ReadingBoxComponent,
    DefaultBoxDirective,
    NameInitialsPipe
  ]
})
export class SharedModule { }
