import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {

  firstName: string = 'John';

  courseName = signal<string>('Angular');
  courseDuration = signal<number>(3);

  courseDetails = computed(() => {
    return `${this.courseName()} - Duration: ${this.courseDuration()} months`;
  });

  constructor() {
    setTimeout(() => {
      // signal value updated after 3 seconds method name set
      this.courseName.set('Angular 16 with TypeScript');
    }, 3000);

    console.log('Initial Course Name:', this.courseName());
  }

}
