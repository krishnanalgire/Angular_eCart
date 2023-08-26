import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

 //using this we can make http request 
  constructor( private Http: HttpClient) { }
  login(data: any):Observable<any>{
    console.log("I am Server");
  return this.Http.post('',data);
}
}
