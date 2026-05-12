import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Admin } from './Components/admin/admin';
import { User } from './Components/user/user';
import { DataBinding } from './Components/data-binding/data-binding';
import { Signal } from './Components/signal/signal';
import { ControlFlow } from './Components/control-flow/control-flow';
import { AttDirective } from './Components/att-directive/att-directive';
import { ClcEvents } from './Components/clc-events/clc-events';
import { Api } from './Components/api/api';
import { ApiRF } from './Components/api-rf/api-rf';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink, RouterLinkActive, Admin,User,DataBinding,Signal, ControlFlow, AttDirective, ClcEvents, Api,ApiRF], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('demo');
}
