import { NgClass, NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-att-directive',
  imports: [NgClass, NgStyle],
  templateUrl: './att-directive.html',
  styleUrl: './att-directive.css',
})
export class AttDirective {
  divClassName = signal<string>(' ');

  isdiv2ClassName: boolean = false;

  setBgClass(className: string) {
    this.divClassName.set(className);
  }

  toggleDiv2Class() {
    this.isdiv2ClassName = !this.isdiv2ClassName;
  }

 
}
