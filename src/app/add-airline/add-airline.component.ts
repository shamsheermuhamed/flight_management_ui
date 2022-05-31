import { Component, OnInit } from '@angular/core';
import Airline from '../Entity/airline';
import User from '../Entity/user';
import { AirlineService } from '../service/airline.service';

@Component({
  selector: 'app-add-airline',
  templateUrl: './add-airline.component.html',
  styleUrls: ['./add-airline.component.css']
})
export class AddAirlineComponent implements OnInit {

  airline:Airline=new Airline();
  user:User=new User
  constructor(private airlineService: AirlineService) { }

  save()
  {
    this.airlineService.addAirline(this.airline).subscribe(
      data=> {
        console.log(data) }
    );
  }
  ngOnInit(): void {
  }

}
