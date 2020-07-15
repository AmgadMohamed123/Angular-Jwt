import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

api_url="http://localhost:8080/api/class/classes";


  constructor(private http:HttpClient) { }


//Get Classes

getClasses(){

  return this.http.get(`${this.api_url}`);
 }
addClass(c):Observable<any>{
  return this.http.post(`${this.api_url}`,c);
}

}
