import { Component, Inject } from '@angular/core';
import { MasterService } from '../../services/master';

// component decorator
@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {


  message: string = '';

  // 🔹 Make service public so it’s accessible in the template
  constructor(public masterService: MasterService) {}

  // masterService: Inject(MasterService);

  ngOnInit(): void {
    this.message = this.masterService.getMessage();
  }
}
