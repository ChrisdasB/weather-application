import { Routes } from '@angular/router';

export const routes: Routes = [
{
    path: '',
    pathMatch:"full",
    loadComponent: () => {
        return import('./home/home.component').then(
            m => m.HomeComponent
        );
    }
},
{
    path:"counter",
    loadComponent: () => {
        return import('./counter/counter.component').then(
            m => m.CounterComponent
        );
    }
},
{
    path:"todos",
    loadComponent: () => {
        return import('./todos/todos.component').then(
            m => m.TodosComponent
        );
    }
}
   
];
