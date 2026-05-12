import { Routes } from '@angular/router';
import { Admin } from './Components/admin/admin';
import { User } from './Components/user/user';
import { ControlFlow } from './Components/control-flow/control-flow';
import { DataBinding } from './Components/data-binding/data-binding';
import { Signal } from './Components/signal/signal';
import { NotFound } from './Components/not-found/not-found';
import { AttDirective } from './Components/att-directive/att-directive';
import { ClcEvents } from './Components/clc-events/clc-events';
import { Api } from './Components/api/api';
import { ApiRF } from './Components/api-rf/api-rf';

export const routes: Routes = [
    // old method of lazy loading 
    // {path: 'admin', loadComponent: () => import('./Components/admin/admin').then(m => m.Admin)},
    // {path: '', redirectTo: '/admin', pathMatch: 'full' },
    { path: 'admin', component: Admin },
    { path: 'user', component: User },
    { path: 'controlflow', component: ControlFlow },
    { path: 'databinding', component: DataBinding },
    { path: 'signal', component: Signal },
    {path: 'attDirective', component: AttDirective},
    {path: 'clcEvents', component: ClcEvents},
    {path: 'api', component: Api},
    {path: 'apirf', component: ApiRF},
    {path: '**', component: NotFound}  // wildcard route
    
];
