import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery'
import { map } from 'rxjs/operators';
import { RequestCategoria } from 'src/app/resources/models/Categorias/RequestCategoria';
import { AlertService } from 'src/app/resources/services/alert/alert.service';
import { CategoriaService } from 'src/app/resources/services/categoria/categoria.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public requestCategoria!: RequestCategoria;
  categorias: RequestCategoria[] = [];

  constructor(
    private categoriaService: CategoriaService,
    private alertService: AlertService,
    private router: Router
  ) {

   }


  ngOnInit(): void {
    this.getCategorias();
    this.requestCategoria = new RequestCategoria();
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
        console.log(Object.values(this.categorias[2]));
      }
    })
  }
}
