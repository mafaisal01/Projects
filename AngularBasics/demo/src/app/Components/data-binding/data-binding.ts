import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {

  courseName: string = 'Angular Fundamentals';
  courseRating: number = 10;
  isEnrolled: boolean = true;
  studentCount: number = 200;
  coursePrice: number = 1;

  onEnroll() {
    alert('You have been enrolled successfully!');
  }

  changeCourseName() {
    this.courseName = 'Angular Advanced';
  }

  constructor() {
    
  }


}
