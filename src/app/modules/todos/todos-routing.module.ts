import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTodosComponent } from './components/list-todos/list-todos.component';
import { TodosResolver } from './guards/todos-resolver';

const routes: Routes = [
    {
        path: '',
        component: ListTodosComponent,
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