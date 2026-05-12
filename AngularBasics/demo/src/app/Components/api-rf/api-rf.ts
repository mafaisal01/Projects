import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api-rf',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './api-rf.html',
  styleUrls: ['./api-rf.css'],
})
export class ApiRF implements OnInit {
  userList: any[] = [];

  http = inject(HttpClient);

  userForm: FormGroup = new FormGroup({
    userId: new FormControl(0),
    emailId: new FormControl(''),
    password: new FormControl(''),
    fullName: new FormControl(''),
    mobileNo: new FormControl(''),
  });

  // ✅ Added missing userObject
  userObject: any = {
    userId: 0,
    emailId: '',
    password: '',
    fullName: '',
    mobileNo: ''
  };

  ngOnInit(): void {
    this.getAllData();
  }

  // ✅ get API data
  getAllData() {
    this.http.get('https://api.freeprojectapi.com/api/GoalTracker/getAllUsers')
      .subscribe((result: any) => {
        this.userList = result;
      });
  }

  // ✅ Save user (POST API)
  onSaveUser() {
    const formValue = this.userForm.value;
    this.http.post('https://api.freeprojectapi.com/api/GoalTracker/register', formValue)
      .subscribe({
        next: () => {
          alert('User Created Successfully');
          this.getAllData();
          this.onReset();
        },
        error: (error) => {
          alert('Error - ' + JSON.stringify(error));
        }
      });
  }

  // ✅ Reset form and userObject
  onReset() {
    this.userObject = {
      userId: 0,
      emailId: '',
      password: '',
      fullName: '',
      mobileNo: ''
    };
    this.userForm.reset(this.userObject);
  }

  // ✅ Update user (PUT API)
  onUpdateUser() {
    this.http.put(
      'https://api.freeprojectapi.com/api/GoalTracker/updateUser?id=' + this.userObject.userId,
      this.userObject
    )
      .subscribe({
        next: () => {
          alert('User Updated Successfully');
          this.getAllData();
          this.onReset();
        },
        error: (error) => {
          alert('Error - ' + JSON.stringify(error));
        }
      });
  }

  // ✅ Delete user (DELETE API)
  onDelete(id: number) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.http.delete('https://api.freeprojectapi.com/api/GoalTracker/deleteUserById?id=' + id)
        .subscribe({
          next: () => {
            alert('User Deleted Successfully');
            this.getAllData();
          },
          error: (error) => {
            alert('Error - ' + JSON.stringify(error));
          }
        });
    }
  }

  // ✅ Edit user (populate form)
  onEdit(item: any) {
    this.userObject = { ...item };
    this.userForm.patchValue(this.userObject);
  }
}
