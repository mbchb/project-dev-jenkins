import { Injectable } from '@angular/core';

import {HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private httpreq:HttpClient) { }

  sendMessage(body){
    let headers = {
      headers : new HttpHeaders({
        'Content-Type' :'application/json'
      })
    }
    return this.httpreq.post("http://localhost:3000/email",body,headers);
  }

}
