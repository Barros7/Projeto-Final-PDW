import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestLogin } from '../../models/login/RequestLogin';
import { ResponseLogin } from '../../models/login/ResponseLogin';
import { tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  public doLogin(requestLogin: RequestLogin): Observable<ResponseLogin> {
    return this.httpClient.post<ResponseLogin>('http://127.0.0.1:8000/api/login', requestLogin )
    .pipe(tap((loginResponse)=>(this.authService.loginResponse = loginResponse))
    );
  }
}