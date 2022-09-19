import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  navigation:boolean=false;
  men:boolean=false;
  count:number=0;
  user_i:any;
  constructor() {
    
   
   }

  ngOnInit(): void {
    AOS.init();
  }
  
  hide(){
    if(this.navigation==false)
    this.navigation=true;
    else
    this.navigation=false;
 }



 menu(){
  this.men=false;
}
cl_m(){
 this.men=true;
}
}

