import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListTodosContainerComponent } from './components/list-todos-container/list-todos-container.component';

@NgModule({
  declarations: [
    ListTodosContainerComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    SharedModule
  ]
})
export class TodosModule { }
