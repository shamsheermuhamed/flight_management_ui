import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAirlineComponent } from './add-airline/add-airline.component';
import { AddDiscountComponent } from './add-discount/add-discount.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { GetairlineComponent } from './getairline/getairline.component';
import { GetdiscountComponent } from './getdiscount/getdiscount.component';
import { GetflightComponent } from './getflight/getflight.component';
import { GetticketComponent } from './getticket/getticket.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './service/auth.guard';
import { SignupComponent } from './signup/signup.component';
import { UpdateTicketComponent } from './update-ticket/update-ticket.component';
import { UserhomeComponent } from './userhome/userhome.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"adminhome", component:AdminhomeComponent,canActivate:[AuthGuard]},
  {path:"login", component:LoginComponent},
  {path:"signup", component:SignupComponent},
  {path:"userhome", component:UserhomeComponent,pathMatch:"full",canActivate:[AuthGuard]},
  {path:"addairline",component:AddAirlineComponent},
  {path:"getairline",component:GetairlineComponent},
  {path:"getdiscount",component:GetdiscountComponent},
  {path:"adddiscount",component:AddDiscountComponent},
  {path:"addflight",component:AddFlightComponent},
  {path:"getflight",component:GetflightComponent},
  {path:"bookticket",component:BookTicketComponent},
  {path:"editticket",component:UpdateTicketComponent},
  {path:"getticket",component:GetticketComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
