import { Component, OnInit } from '@angular/core';
import { Flight } from '../Entity/flight';
import { FlightService } from '../service/flight.service';

@Component({
  selector: 'app-getflight',
  templateUrl: './getflight.component.html',
  styleUrls: ['./getflight.component.css']
})
export class GetflightComponent implements OnInit {

  flight:Flight[]=[]
  constructor(private flightService: FlightService) { }

  ngOnInit(): void {

    const promise = this.flightService.getFlights();
    promise.subscribe((response) => {
      console.log(response);
      this.flight = response as Flight[]; 
    })
  }

}
