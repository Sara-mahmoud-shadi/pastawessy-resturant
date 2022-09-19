import { Injectable } from '@angular/core';

import{HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommondataService {

  constructor(public _HttpClient:HttpClient) { }

  getinfo():Observable<any>{

    let headers =new HttpHeaders().set('X-RapidAPI-Key','35b407863emsh96758b80aca0f6bp14bff5jsn539c0254eff6')
    .set('X-RapidAPI-Host','cooking-recipe2.p.rapidapi.com');
    let url='https://cooking-recipe2.p.rapidapi.com/';
    return this._HttpClient.get(url,{headers});
  }}
