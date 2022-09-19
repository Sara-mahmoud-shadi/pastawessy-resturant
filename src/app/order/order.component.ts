import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{AuthService} from '../auth.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  cartProduct:any[]=[];
order:any;
total:number=0;
message:string='';
display:boolean=false;


  constructor(public _ActivatedRoute:ActivatedRoute,public _AuthService:AuthService) { 

      //this.par_id=this._ActivatedRoute.snapshot.paramMap.get('id');

      this.cartProduct=JSON.parse(localStorage.getItem("cartpasta")!)

      this.totalprice();
      console.log(this.cartProduct);
      

  }

  ngOnInit(): void {

  }
  totalprice(){
    this.total=0;
    for(let i of this.cartProduct){
      this.total+=(i.quantity*i.price);
    }
  }
  delete(){
    this.cartProduct=[]
    localStorage.setItem("cartpasta",JSON.stringify(this.cartProduct));
    this.display=true;
                                            
  }
cart(){
  this.display=true;
}

deleteProduct(index:number){
  
 
  this.cartProduct.splice(index,1);
  this.totalprice();
}
exite(){
  this.display=false;
}

}
