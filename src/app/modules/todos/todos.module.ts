import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListTodosComponent } from './components/list-todos/list-todos.component';
import { TodosRoutingModule } from './todos-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ListTodosComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    SharedModule
  ]
})
export class TodosModule { }
