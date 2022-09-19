import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject} from 'rxjs';
import{U_data}from './userdara';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userdate=new BehaviorSubject(null);
  u_id:any;
  constructor(public _HttpClient:HttpClient) { 
    
  }

  savedata(data:any){

this.u_id=data.name;
let user:any = new U_data(data.name);
this.u_id=data.name;
this.userdate.next(user);

  }


}

