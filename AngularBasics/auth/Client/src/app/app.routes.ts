import { Routes } from '@angular/router';
import { Signup } from './Components/signup/signup';
import { Login } from './Components/login/login';
import { NotFound } from './Components/not-found/not-found';
import { Hero } from './Components/hero/hero';
import { Profile } from './Components/profile/profile';
import { Home } from './Components/home/home';

export const routes: Routes = [
    {path: 'home', component: Home},
    {path: 'hero', component: Hero},
    {path: 'signup', component: Signup},
    {path: 'login', component: Login},
    {path: 'profile', component: Profile},
    {path: '**', component: NotFound}  // wildcard route
];
