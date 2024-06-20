import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrl: './edit-form.component.scss'
})
export class EditFormComponent  {


  months = [{ name: 'January', amount: '' }];
  allMonths = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  addMonth() {
    const nextMonthIndex = this.months.length;
    if (nextMonthIndex < this.allMonths.length) {
      this.months.push({ name: this.allMonths[nextMonthIndex], amount: '' });
    }
  }
}


