import { Component, OnInit } from '@angular/core';
import { RequestExpenses } from 'src/app/resources/models/Expenses/RequestExpenses';
import { ResponseExpenses } from 'src/app/resources/models/Expenses/ResponseExpenses';
import { ExpensesService } from 'src/app/resources/services/expenses/expenses.service';
import { SenderService } from 'src/app/sender.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  expenses: ResponseExpenses[] = [];
  constructor(private service:SenderService) { }

  ngOnInit(): void {
    this.expenses=Object.values(this.service.expenses[2]);
    console.log(this.expenses);
  }


}
