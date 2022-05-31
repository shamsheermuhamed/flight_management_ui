import { Component, OnInit } from '@angular/core';
import Airline from '../Entity/airline';
import { AirlineService } from '../service/airline.service';

@Component({
  selector: 'app-getairline',
  templateUrl: './getairline.component.html',
  styleUrls: ['./getairline.component.css']
})
export class GetairlineComponent implements OnInit {

  airline:Airline[]=[]
  constructor(private airlineService: AirlineService) { }

  ngOnInit(): void {

    const promise = this.airlineService.getAirline();
    promise.subscribe((response) => {
      console.log(response);
      this.airline = response as Airline[]; 
    })
  }

}
