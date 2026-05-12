import { Injectable } from '@angular/core';

// The @Injectable decorator marks this class as available for dependency injection.
@Injectable({
  providedIn: 'root' // This makes the service a singleton across the app
})
export class MasterService {

  private message: string = 'Hello from MasterService!';

  constructor() { }

  // Example method to return data
  getMessage(): string {
    return this.message;
  }

  // Example method to set data
  setMessage(newMessage: string): void {
    this.message = newMessage;
  }
}

