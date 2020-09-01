import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadingBoxComponent } from './components/reading-box/reading-box.component';

@NgModule({
  declarations: [
    ReadingBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReadingBoxComponent
  ]
})
export class SharedModule { }
