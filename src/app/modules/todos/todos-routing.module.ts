import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListTodosContainerComponent } from './components/list-todos-container/list-todos-container.component';
import { TodosResolver } from './guards/todos-resolver';

const routes: Routes = [
    {
        path: '',
        component: ListTodosContainerComponent,
        resolve: {
            sliceOfTodos: TodosResolver
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