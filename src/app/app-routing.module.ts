import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodComponent } from './food/food.component';

import { SignupComponent } from './signup/signup.component';
import { LocationComponent } from './location/location.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
{path:'', redirectTo:'home' ,pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'food', component:FoodComponent},
 
  {path:'signup',component:SignupComponent},
  {path:'location',component:LocationComponent},
  {path:'Orders/:id',component:OrderComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
