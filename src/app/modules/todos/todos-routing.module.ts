import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoResolver } from './guards/todo-resolver';
import { ListTodosContainerComponent } from './components/list-todos-container/list-todos-container.component';
import { ViewTodoComponent } from './components/view-todo/view-todo.component';
import { TodosResolver } from './guards/todos-resolver';

const routes: Routes = [
    {
        path: '',
        component: ListTodosContainerComponent,
        resolve: {
            sliceOfTodos: TodosResolver
        }
    },
    {
        path: ':todoId',
        component: ViewTodoComponent,
        resolve: {
            todo: TodoResolver
        } 
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class TodosRoutingModule { }