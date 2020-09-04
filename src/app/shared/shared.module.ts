import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformationBoxWithIconComponent } from './components/information-box-with-icon/information-box-with-icon.component';
import { ReadingBoxComponent } from './components/reading-box/reading-box.component';

@NgModule({
  declarations: [
    InformationBoxWithIconComponent,
    ReadingBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InformationBoxWithIconComponent,
    ReadingBoxComponent
  ]
})
export class SharedModule { }
