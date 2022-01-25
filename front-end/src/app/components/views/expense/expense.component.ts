import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestExpenses } from 'src/app/resources/models/Expenses/RequestExpenses';
import { ResponseExpenses } from 'src/app/resources/models/Expenses/ResponseExpenses';
import { AlertService } from 'src/app/resources/services/alert/alert.service';
import { ExpensesService } from 'src/app/resources/services/expenses/expenses.service';
import { SenderService } from 'src/app/sender.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  expenses: ResponseExpenses[] = [];
  public requestExpense!: RequestExpenses;
  constructor(private service:SenderService,
    private expensesService:ExpensesService,
    private alertService: AlertService,private router: Router) { }

  ngOnInit(): void {
    this.requestExpense = new RequestExpenses();
    this.expenses=Object.values(this.service.expenses[2]);
    console.log(this.expenses);

  }


  public saveExpense() :void{
    this.requestExpense.subcategory_id=this.service.idsubcategoria;
    this.requestExpense.users_id=this.service.iduser;
    this.expensesService.saveExpenses(this.requestExpense).subscribe((data)=>{
      
      this.router.navigate(['/expense']);
    },
    (httpError) =>{
      this.alertService.error(httpError, httpError.error.message);
      //console.error(httpError);
    }
    )
  }

}
