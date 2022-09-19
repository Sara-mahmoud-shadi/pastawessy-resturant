import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import{AuthService}from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

err_name:any=null;
err_email:any=null;
err_location:any=null;
err_phone:any=null;

dat:any;
display:boolean=false;

  registerform:FormGroup=new FormGroup({

    'name':new FormControl(null,Validators.required),

    'email':new FormControl(null,Validators.required),

    'location':new FormControl(null,Validators.required),

    'phone':new FormControl(null,[Validators.required,Validators.maxLength(12)]),

  })

  constructor(public _AuthService:AuthService,public _Router:Router) { }

  ngOnInit(): void {
  }

  getdata(dat:any){


    if(dat.valid==true){this._AuthService.savedata(dat);
     
      this.display=true;
    // this._AuthService.signup(dat.value).subscribe(data=>{
      

      
     }//);
     
    else{
     this. err_name=dat.controls.name.errors;
     this. err_email=dat.controls.email.errors;
      this.err_location=dat.controls.location.errors;
      this.err_phone=dat.controls.phone.errors;

    }

   }
   exite(){
    this.display=false;
  }
}  


