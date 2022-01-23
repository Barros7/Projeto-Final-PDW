import { Injectable } from '@angular/core';
import { ResponseLogin } from '../../models/login/ResponseLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loginResponse: ResponseLogin | undefined; 

  //clear the jwt when user is'nt authenticated
  public clear():void{
    this.loginResponse == undefined;
  }

  //verify and info, if user is authenticated or no
  public isAuthenticated():boolean{
    return Boolean(this.loginResponse?.jwt);
  }
}
