import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Service } from '../../Services/service';  // adjust the path as needed

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  credentials = {
    username: '',
    password: ''
  };

  constructor(private authService: Service, private router: Router) { } // ✅ inject Router

  onSubmit() {
    if (!this.credentials.username || !this.credentials.password) {
      alert('Please fill in all fields.');
      return;
    }

    this.authService.login(this.credentials).subscribe({
      next: (res) => {
        console.log('Login successful:', res);

        // Save token
        localStorage.setItem('token', res.token);

        // Save user info (adjust based on your API response)
        localStorage.setItem('user', JSON.stringify(res.user));

        alert('Login successful!');

        // ✅ Redirect to profile page
        this.router.navigate(['/profile']);
      },
      error: (err) => {
        console.error(err);
        alert('Invalid username or password.');
      }
    });
  }
}
