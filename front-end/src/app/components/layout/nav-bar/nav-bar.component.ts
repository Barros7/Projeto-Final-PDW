import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery'
import { map } from 'rxjs/operators';
import { RequestCategoria } from 'src/app/resources/models/Categorias/RequestCategoria';
import { ResponseCategoria } from 'src/app/resources/models/Categorias/ResponseCategoria';
import { RequestSubcategoria } from 'src/app/resources/models/Subcategorias/RequestSubcategoria';
import { ResponseSubcategoria } from 'src/app/resources/models/Subcategorias/ResponseSubcategoria';
import { AlertService } from 'src/app/resources/services/alert/alert.service';
import { CategoriaService } from 'src/app/resources/services/categoria/categoria.service';
import { SubcategoriaService } from 'src/app/resources/services/subcategoria/subcategoria.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public requestCategoria!: RequestCategoria;
  public requestSubcategoria!: RequestSubcategoria;
  categorias: ResponseCategoria[] = [];
  subcategorias: ResponseSubcategoria[] = [];

  constructor(
    private subcategoriaService: SubcategoriaService,
    private categoriaService: CategoriaService,
    private alertService: AlertService,
    private router: Router
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
  }

  public saveCategorias() :void{
    this.categoriaService.saveCategorias(this.requestCategoria).subscribe((data)=>{
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
      this.subcategoriaService.loadSubcategorias(categoria.id).subscribe({
        next: data =>{
          this.subcategorias=data;
          console.log(data);
          this.subcategorias=Object.values(this.subcategorias[2]);
        }
      })
    }
  saveSubcategorias() :void{
    this.subcategoriaService.saveSubcategorias(this.requestSubcategoria).subscribe((data)=>{
      console.log(this.requestSubcategoria);
      this.router.navigate(['']);
    },
    (httpError) =>{
      this.alertService.error(httpError, httpError.error.message);
      //console.error(httpError);
    }
    )
  }
}
