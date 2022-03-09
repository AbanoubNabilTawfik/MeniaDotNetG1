import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IEmployee } from '../IEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
   _url:string="/assets/Data/employees.json";
  getEmployees():Observable<IEmployee[]>
  {
    return  this.http.get<IEmployee[]>(this._url).pipe(catchError((err)=>{
       return throwError(()=>err.message || "Server error")
    }));
  }
}
