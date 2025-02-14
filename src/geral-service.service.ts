import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeralServiceService {

  constructor(public http : HttpClient) { }



  getAllUsers() : Observable<any>{
      return this.http.get('http://localhost:3000/api/users')
  }

}
