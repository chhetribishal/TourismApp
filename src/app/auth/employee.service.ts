import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { Loginemployee } from './login/loginemployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
   public baseUrl = "http://localhost:8000/api/";

  public register(form:Employee[]):Observable<Employee[]>
  {
    console.log(form);

    return this.http.post<Employee[]>(this.baseUrl+"register",form)
    

  }

  public login(logindata:any):Observable<Loginemployee[]>
  { 
    console.log("hello");
    console.log(logindata.password);
    return this.http.post<Loginemployee[]>(this.baseUrl+"login",logindata);
  }
}
