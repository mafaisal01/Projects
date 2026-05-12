import { OnInit, OnDestroy , AfterViewInit , AfterViewChecked , 
AfterContentInit , AfterContentChecked, DoCheck , OnChanges, Component } from '@angular/core';

import { JsonPipe, UpperCasePipe } from '@angular/common';
import { CustompipePipe } from '../../pipes/custompipe-pipe';

@Component({
  selector: 'app-clc-events',
  imports: [UpperCasePipe, JsonPipe, CustompipePipe],
  templateUrl: './clc-events.html',
  styleUrl: './clc-events.css',
})
export class ClcEvents implements OnInit, OnDestroy , AfterViewInit , AfterViewChecked , 
AfterContentInit , AfterContentChecked, DoCheck , OnChanges , AfterViewChecked {

   firstName: string = 'John';
   lastName: string = 'Doe';

   studentdetails = {
     id: 1,
     name: 'Alice',
     age: 20,
      email: '',
   };

  // default constructor
  constructor() {
  }

  ngOnInit(): void {
    // to trigger and api call
    // subscribe to observables
    console.log('ngOnInit called');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }
  ngOnChanges(): void {
    console.log('ngOnChanges called');
  }
  
   
}
