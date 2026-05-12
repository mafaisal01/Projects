import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {

  courses = [
    {
      id: 1,
      title: 'Web Development Bootcamp',
      description: 'Learn HTML, CSS, JavaScript, and Angular to build amazing web apps.',
      image: 'assets\images\DataScience.jpg'
    },
    {
      id: 2,
      title: 'Data Science Fundamentals',
      description: 'Dive into Python, statistics, and data visualization techniques.',
      image: 'assets/images/data-science.jpg'
    },
    {
      id: 3,
      title: 'UI/UX Design Masterclass',
      description: 'Master design principles and create stunning user experiences.',
      image: 'assets/images/uiux.jpg'
    }
  ];

}
