import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestProfile } from '../../models/profile/RequestProfile';
import { ResponseProfile } from '../../models/profile/ResponseProfile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient) { }

  public doManagementProfile(RequestProfile: RequestProfile): Observable<ResponseProfile>{
    return this.httpClient.post<ResponseProfile>('http://127.0.0.1:8000/api/register', RequestProfile);
    console.log(ResponseProfile)
  }
}