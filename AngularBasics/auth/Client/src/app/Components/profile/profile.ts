import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class Profile {
  user = {
    fullname: '',
    username: '',
    email: '',
    phone: '',
    address: '',
    avatar: ''
  };

  constructor() {
    // ✅ Load user info from localStorage (saved during login)
    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
    }
  }
}
