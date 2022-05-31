import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Airline from '../Entity/airline';

@Injectable({
  providedIn: 'root'
})
export class AirlineService {

  constructor(private http:HttpClient) { }

  addAirline(airline:{airname:string,airphone:number,airaddress:string}){
   return this.http.post("http://localhost:8089/flight/airline/add",airline);
  }
  updateAirline(airline:Airline){
    return this.http.post("http://localhost:8089/flight/airline/update",airline);
   }
   getAirline(){
    return this.http.get("http://localhost:8089/flight/airlines");
   }
}
