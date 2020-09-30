import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListTodosContainerComponent } from './components/list-todos-container/list-todos-container.component';
import { ViewTodoComponent } from './components/view-todo/view-todo.component';

@NgModule({
  declarations: [
    ListTodosContainerComponent,
    ViewTodoComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    SharedModule
  ]
})
export class TodosModule { }
