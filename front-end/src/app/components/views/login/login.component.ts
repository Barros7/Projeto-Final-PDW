import { Component, OnInit } from '@angular/core';
import { RequestLogin } from 'src/app/resources/models/login/RequestLogin';
import { ResponseLogin } from 'src/app/resources/models/login/ResponseLogin';
import { AlertService } from 'src/app/resources/services/alert/alert.service';
import { LoginService } from 'src/app/resources/services/login/login.service';
import { Router } from '@angular/router';
import { SenderService } from 'src/app/sender.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public requestLogin!: RequestLogin;
  public responseLogin!:ResponseLogin;
  idusertemp: ResponseLogin[] = [];
  constructor( 
    private loginService: LoginService, 
    private alertService: AlertService,
    private router: Router,
    private service: SenderService
  ) { }

  ngOnInit(): void {
    this.requestLogin = new RequestLogin();
    this.responseLogin = new ResponseLogin();
  }

  public doLogin(): void {
    this.loginService.doLogin(this.requestLogin).subscribe((data)=>{
      this.idusertemp=Object.values(data);
      this.service.iduser=Number(this.idusertemp[0].id);
      this.router.navigate(['home']);
      },
      (httpError) =>{
        this.alertService.error(httpError, httpError.error.message);
        //console.error(httpError);
      },
    );
  }
}