import { Component, OnInit } from '@angular/core';
import { Flight } from '../Entity/flight';
import { FlightService } from '../service/flight.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {

  flight:Flight=new Flight
  constructor(private flightService:FlightService) { }

  save()
  {
    this.flightService.addFlight(this.flight).subscribe(
      (response)=>{
        console.log(response);
      }
    )
  }
  ngOnInit(): void {
  }

}
