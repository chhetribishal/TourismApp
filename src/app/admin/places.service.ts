import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Places } from './places';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  public baseUrl = "http://localhost:8000/api/";
  constructor(private http:HttpClient) { }
  public add(form:Places):Observable<Places[]>{
    return this.http.post<Places[]>(this.baseUrl+"add",form);

  }
  public delete(id:number):Observable<Places[]>{
    return this.http.post<Places[]>(this.baseUrl+"delete?id="+id,null);

  }
  public show(keys:any):Observable<Places[]>{
    return this.http.post<Places[]>(this.baseUrl+"show?keys="+keys,null);

  }
  public update(form:Places):Observable<Places[]>{
    return this.http.post<Places[]>(this.baseUrl+"update",form);

  }
}
