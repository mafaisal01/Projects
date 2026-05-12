import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router'; // ✅ import Router
import { Service } from '../../Services/service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css']
})
export class Signup {
  user = {
    fullname: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: ''
  };
  selectedFile: File | null = null;
  previewUrl: string | ArrayBuffer = 'https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png';

  constructor(private authService: Service, private router: Router) { } // ✅ inject Router

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = e => this.previewUrl = reader.result!;
      reader.readAsDataURL(this.selectedFile);
    }
  }

  onSubmit() {
    if (this.user.password !== this.user.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const formData = new FormData();
    formData.append('fullname', this.user.fullname);
    formData.append('username', this.user.username);
    formData.append('email', this.user.email);
    formData.append('password', this.user.password);
    if (this.user.phone) formData.append('phone', this.user.phone);
    if (this.user.address) formData.append('address', this.user.address);
    if (this.selectedFile) formData.append('avatar', this.selectedFile);

    this.authService.signup(formData).subscribe({
      next: res => {
        console.log('Registration successful:', res);

        // Save user info to localStorage
        localStorage.setItem('user', JSON.stringify(res.user));

        alert('User registered successfully!');

        // ✅ Redirect to profile after successful signup
        this.router.navigate(['/profile']);
      },
      error: err => {
        console.error(err);
        alert('Error: ' + (err.error?.msg || 'Something went wrong.'));
      }
    });
  }
}
