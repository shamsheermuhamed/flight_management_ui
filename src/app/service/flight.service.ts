import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Airline from '../Entity/airline';
import { Flight } from '../Entity/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http:HttpClient) { }

  addFlight(flight:{flightid:number,flightfrom:string,flightto:string,starttime:string
    ,endtime:string,airline:string}){
      
    return this.http.post("http://localhost:8089/flight/flight/add",flight);
  }
  updateFlight(flight:Flight){
    return this.http.post("http://localhost:8089/flight/flight/update",flight);
   }
   getFlights(){
    return this.http.get("http://localhost:8089/flight/flights");
   }

   getFlightsbyPlace(cred:{startplace:string,endplace:string}){
    return this.http.post("http://localhost:8089/flight/flight/getFlightsbyPlace",cred);
   }
   getFlightsbyId(flightid:number){
    return this.http.get("http://localhost:8089/flight/flight/"+flightid);
   }

   deleteFlightById(flightid:any)
   {
      return this.http.delete("http://localhost:8089/flight/delete/"+flightid)
   }
}
