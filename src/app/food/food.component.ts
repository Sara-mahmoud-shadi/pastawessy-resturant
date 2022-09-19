
import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import{CommondataService} from '../commondata.service';
import{AuthService} from '../auth.service';
import { Router } from '@angular/router';


declare const test:any;

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {
  navigation:boolean=false;
  
  imagpath='';

  arrow:any=[];
  inf:any[]=[];
  infoo:any[]=[];
  men:boolean=false;
  hand:any=[];
  image:string='';
  text:string='';
  id:number=0;
  price:number=0;
  desc:string='';
  count:number=0;
  display:boolean=false;
  displaay:boolean=false;
  e:boolean=false;
  pricee:number=75;
  data:any;
  islogin:boolean=false;
  user_i:any;
  index:number=0;
  store:any;
  cartProduct:any[]=[];
  info:any=[];
  dat:any;
 

  registerform:FormGroup=new FormGroup({

    'quantity':new FormControl(null,Validators.required),

  })

  constructor(public _CommondataService:CommondataService , public _AuthService:AuthService,
    public _Router:Router) {

    this._CommondataService.getinfo().subscribe((data:any)=>{
      if("apiProduct" in localStorage){
      
        this.inf=JSON.parse(localStorage.getItem("apiProduct")!)
      
      }
      else{
        this.inf.push(data);
        localStorage.setItem("apiProduct" ,JSON.stringify(this.inf));
       
      }

      for(let i=30;i<60;i++){
        this.infoo[i]=this.inf[0][i];
        this.info.push({'title':this.infoo[i].title,'img':this.infoo[i].img});
      

      }
        
      
      
       
  
    }
                       
      );
      


    //////////////////////////////////

   this._AuthService.userdate.subscribe(data=>{
    

    if(data){
     
      this.islogin=true;
    }
    else{
      this.islogin=false;
    }
   });

   
   }


  ngOnInit(): void {
    AOS.init();
   
  }

  
cli(id:number){


  if(this.arrow[id]==false)
  this.arrow[id]=true;
  else
  this.arrow[id]=false;

  
}
cl(id:number){
  this.hand[id]=true;
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
cart(product:any,indexx:number){

this.image=product.img;
this.text=product.title;
this.index=indexx;
this.display=true;
}

exite(){
  this.displaay=false;
}
exit(){
  this.display=false;
}
getdata(formdata:any){

  
 
  this.store={
    name:this.text,
    image: this.image,
    price:this.pricee ,
    quantity:formdata.value.quantity ,
    id:this.index
   
  }
 
  
  if("cartpasta" in localStorage){
      
    this.cartProduct=JSON.parse(localStorage.getItem("cartpasta")!)
    let exist= this.cartProduct.find(item=>item.id==this.store.id)
    if(!exist){

      this.cartProduct.push(this.store);
    localStorage.setItem("cartpasta",JSON.stringify(this.cartProduct))
    }
    
  }
  else{
    this.cartProduct.push(this.store);
    localStorage.setItem("cartpasta",JSON.stringify(this.cartProduct));
   
  }
this.displaay=true;
this.count+=1;
}


}

