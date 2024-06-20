import { Component } from '@angular/core';

interface Expense {
  serialNumber: number;
  title: string;
  amounts: { 
    year: number;
    month: string;
    amount: number;
  }[];
}

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.scss']
})
export class ExpenseFormComponent {
  years: number[] = [2023]; 
  months: string[] = ['January']; 
  expenses: Expense[] = [
    { 
      serialNumber: 1, 
      title: 'Sample Expense', 
      amounts: [{ year: 2023, month: 'January', amount: 0 }] 
    } 
  ];

  constructor() {}

  addYear() {
    const newYear = this.years[this.years.length - 1] + 1;
    this.years.push(newYear);

    this.expenses.forEach(expense => {
      this.months.forEach(month => {
        expense.amounts.push({ year: newYear, month: month, amount: 0 });
      });
    });
  }

  addMonth() {
    const newMonth = this.getMonthName(this.months.length);
    this.months.push(newMonth);

    this.expenses.forEach(expense => {
      expense.amounts.forEach(amount => {
        if (amount.month === this.months[0]) {
          expense.amounts.push({ year: amount.year, month: newMonth, amount: 0 });
        }
      });
    });
  }

  getAmount(expense: Expense, year: number, month: string): number {
    const found = expense.amounts.find(a => a.year === year && a.month === month);
    return found ? found.amount : 0;
  }

  setAmount(amount: number, expense: Expense, year: number, month: string) {
    const foundIndex = expense.amounts.findIndex(a => a.year === year && a.month === month);
    if (foundIndex !== -1) {
      expense.amounts[foundIndex].amount = amount;
    }
  }

  private getMonthName(index: number): string {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return monthNames[index % 12];
  }
}
