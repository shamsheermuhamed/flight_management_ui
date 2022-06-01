import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from '../Entity/flight';
import { FlightService } from '../service/flight.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  @Input() 

  date1:Date=new Date();
  isreceive:boolean=false;
  cred:any={ startplace:"",endplace:""}
  flight:Flight[]=[];
   
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
  move(flightid:any)
  {
    this.router.navigate(['bookticket',flightid])
    console.log(flightid);
  }
  ngOnInit(): void {
  
  }

}
