import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  imports: [],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {

  isParagraphVisible: boolean = true;

  showParagraph() {
    this.isParagraphVisible = true;
  }

  hideParagraph() {
    this.isParagraphVisible = false;
  }

  startMonth: string = 'January';

  monthList: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

}
