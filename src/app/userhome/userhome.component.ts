import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from '../Entity/flight';
import User from '../Entity/user';
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
    private route:ActivatedRoute) { }

  save()
  {
      this.flightService.getFlightsbyPlace(this.cred).subscribe(
        response=>{
          console.log(response);
          this.isreceive=true;
          if(this.isreceive==true) {this.load(response);}
        }
      )
  }
  load(response:any)
  {
     this.flight = response as Flight[]; 
  }
  move(flightId:any)
  {
    this.router.navigate(['bookticket'],{state:{flightdata:flightId,data:this.user.userid}})
    
  }
  ngOnInit(): void {
    console.log(history.state)
    this.user.userid=history.state.data;
  }

}
