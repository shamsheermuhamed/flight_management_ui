import { Component, OnInit } from '@angular/core';
import Airline from '../Entity/airline';
import { Flight } from '../Entity/flight';
import { FlightService } from '../service/flight.service';

@Component({
  selector: 'app-getflight',
  templateUrl: './getflight.component.html',
  styleUrls: ['./getflight.component.css']
})
export class GetflightComponent implements OnInit {

  flight:Flight[]=[]
  airline:Airline=new Airline
  constructor(private flightService: FlightService) { }

  ngOnInit(): void {

    const promise = this.flightService.getFlights();
    promise.subscribe((response) => {
      console.log(response);
      this.flight = response as Flight[]; 
    })
  }

  deleteFlight(flightid:any)
  {
    this.flightService.deleteFlightById(flightid).subscribe(
      response=>{
        alert("successfully deleted")
      }
    );
  }
}
