import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery'
import { map } from 'rxjs/operators';
import { RequestCategoria } from 'src/app/resources/models/Categorias/RequestCategoria';
import { ResponseCategoria } from 'src/app/resources/models/Categorias/ResponseCategoria';
import { RequestExpenses } from 'src/app/resources/models/Expenses/RequestExpenses';
import { ResponseExpenses } from 'src/app/resources/models/Expenses/ResponseExpenses';
import { RequestSubcategoria } from 'src/app/resources/models/Subcategorias/RequestSubcategoria';
import { ResponseSubcategoria } from 'src/app/resources/models/Subcategorias/ResponseSubcategoria';
import { AlertService } from 'src/app/resources/services/alert/alert.service';
import { CategoriaService } from 'src/app/resources/services/categoria/categoria.service';
import { ExpensesService } from 'src/app/resources/services/expenses/expenses.service';
import { SubcategoriaService } from 'src/app/resources/services/subcategoria/subcategoria.service';
import { SenderService } from 'src/app/sender.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  idcategory!: number;
  public requestCategoria!: RequestCategoria;
  public requestSubcategoria!: RequestSubcategoria;
  public requestExpense!: RequestExpenses;
  categorias: ResponseCategoria[] = [];
  subcategorias: ResponseSubcategoria[] = [];
  expenses: ResponseExpenses[] = [];

  constructor(
    private subcategoriaService: SubcategoriaService,
    private categoriaService: CategoriaService,
    private expensesService:ExpensesService,
    private alertService: AlertService,
    private router: Router,
    private service: SenderService
  ) {

   }

  ngOnInit(): void {
    $(window).on('load',function(){
      $('.dl_link').click(function(){
          var submenu = $('.dl_sub_dd');
          var submenu2 = $('.dl_sub_dd2');
          if (submenu.css('display') == 'none') {
              $('.dl_sub_dd').hide(); //first hide any previously showing submenu's
              submenu.show(); //then show the current submenu
          } else {
              submenu.hide(); //hide the current submenu again
              submenu2.hide();
          }
      });
      $('.dl_link2').click(function(){
        var submenu2 = $('.dl_sub_dd2');
        if (submenu2.css('display') == 'none') {
            $('.dl_sub_dd2').hide(); //first hide any previously showing submenu's
            submenu2.show(); //then show the current submenu
        } else {
            submenu2.hide(); //hide the current submenu again
        }
    });
  });
    this.getCategorias();
    this.requestCategoria = new RequestCategoria();
    this.requestSubcategoria = new RequestSubcategoria();
    this.requestExpense = new RequestExpenses();
  }

  public saveCategorias() :void{
    this.categoriaService.saveCategorias(this.requestCategoria).subscribe((data)=>{
      console.log(this.requestCategoria);
      this.router.navigate(['']);
    },
    (httpError) =>{
      this.alertService.error(httpError, httpError.error.message);
      //console.error(httpError);
    }
    )
  }
  getCategorias() {
    this.categoriaService.getCategorias().subscribe({
      next: data =>{
        this.categorias=data;
        this.categorias=Object.values(this.categorias[2]);
      }
    })
  }
  loadSubcategorias(categoria: RequestCategoria) {
    $('.dl_link2').click(function(){
      var submenu2 = $('.dl_sub_dd2');
      if (submenu2.css('display') == 'none') {
          $('.dl_sub_dd2').hide(); //first hide any previously showing submenu's
          submenu2.show(); //then show the current submenu
      } else {
          submenu2.hide(); //hide the current submenu again
      }
  });
      this.subcategoriaService.loadSubcategorias(categoria.id).subscribe({
        next: data =>{
          this.idcategory=categoria.id;
          this.subcategorias=data;
          this.subcategorias=Object.values(this.subcategorias[2]);
        }
      })
    }
  public saveSubcategorias() :void{
    this.requestSubcategoria.category_id=this.idcategory;
    console.log(this.requestSubcategoria);
    this.subcategoriaService.saveSubcategorias(this.requestSubcategoria).subscribe((data)=>{
      this.router.navigate(['']);
    },
    (httpError) =>{
      this.alertService.error(httpError, httpError.error.message);
      //console.error(httpError);
    }
    )
  }

  public loadExpenses(subcategoria: RequestSubcategoria) {
    this.expensesService.loadExpenses(subcategoria.id).subscribe({
      next: data =>{
        this.expenses=data;
        this.expenses=Object.values(this.expenses);
        this.service.expenses =this.expenses;
        this.router.navigate(['/expense']);
      }
    });
  }
  
}
