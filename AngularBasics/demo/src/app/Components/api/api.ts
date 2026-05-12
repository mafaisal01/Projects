import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-api',
  imports: [FormsModule], // for two way data binding <!-- formsModule (templateForm) -->
  templateUrl: './api.html',
  styleUrl: './api.css',
})
export class Api implements OnInit {

  

  // constructor(private http: HttpClient) {}  // dependency injection for http client old method

  http = inject(HttpClient);  // new method for http client

  userList: any[] = [];

  userObject: any = {
    "userId": 0,
    "emailId": "",
    "password": "",
    "fullName": "",
    "mobileNo": ""
  };
  
  ngOnInit(): void {
    debugger;
    this.getALLData();
  }
 
  // get api data
  getALLData() {
    this.http.get('https://api.freeprojectapi.com/api/GoalTracker/getAllUsers')
      .subscribe((result: any) => {
        this.userList = result;
      });
  }

  // save user data or Post api call
  onSaveUser() {
    this.http.post("https://api.freeprojectapi.com/api/GoalTracker/register", this.userObject)
      .subscribe({
        next: (result) => {
          alert("User Created Successfully");
          this.getALLData();
        },
        error: (error) => {
          alert("Error - " + error);
        }
      });
  }

  onReset() {
    this.userObject = {
      "userId": 0,
      "emailId": "",
      "password": "",
      "fullName": "",
      "mobileNo": ""
    };
  }

  // update user
 onUpdateUser() {
    this.http.put("https://api.freeprojectapi.com/api/GoalTracker/updateUser?id=" + this.userObject.userId, this.userObject)
      .subscribe({
        next: (result) => {
          alert("User Updated Successfully");
          this.getALLData();
        },
        error: (error) => {
          alert("Error - " + error);
        }
      }); 
  }

  // delete user
  onDelete(id: number) {
  if (confirm('Are you sure you want to delete this user?')) {
    this.http.delete("https://api.freeprojectapi.com/api/GoalTracker/deleteUserById?id=" + id)
      .subscribe({
        next: (result) => {
          alert("User Deleted Successfully");
          this.getALLData();
        },
        error: (error) => {
          alert("Error - " + JSON.stringify(error));
        }
      });
  }
}


  // edit user
  onEdit(item: any) {
    this.userObject = item;
  }


}

