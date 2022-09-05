import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminLogin } from '../Model/Admin/admin-login';
import { Observable } from 'rxjs';
import { UserLogin } from '../Model/user-login';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private httpClient: HttpClient) { }

  adminLogin(adminLogin: AdminLogin): Observable<any>{
    let url = "http://localhost:8085/validateAdmin";
    return this.httpClient.post(url, adminLogin);
  }
  userLogin(userLogin: UserLogin):Observable<any>{
    let url = "http://localhost:8085/validateUser";
    return this.httpClient.post(url, userLogin);
  }

}
