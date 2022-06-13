import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from '../Entity/flight';
import User from '../Entity/user';
import { AuthenticationService } from '../service/authentication.service';
import { FlightService } from '../service/flight.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  date1:Date=new Date();
  isreceive:boolean=false;
  cred:any={ startplace:"",endplace:""}
  flight:Flight[]=[];
  user:User=new User
  constructor(private flightService:FlightService,private router:Router, 
    private route:ActivatedRoute,private loginService:AuthenticationService) { }

  save()
  {
      this.flightService.getFlightsbyPlace(this.cred).subscribe(
        (response:any)=>{
          console.log(response);
          // console.log(response.flightid)
          this.isreceive=true;
          if(this.isreceive==true) {this.load(response);}
        }
      )
  }
  load(response:any)
  {
     this.flight = response as Flight[]; 
  }
  move(flightid:any)
  {
    localStorage.setItem("flightid",flightid)
    this.router.navigate(['bookticket'])
    
  }
  ngOnInit(): void {
    
  }

}
