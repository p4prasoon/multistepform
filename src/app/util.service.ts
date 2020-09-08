import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private http:HttpClient) { }
  baseUrl = environment['baseUrl'];

  submit(url,data){
    let _url = this.baseUrl + environment[url];
    return this.http.post(_url,data,{});
  }
}
