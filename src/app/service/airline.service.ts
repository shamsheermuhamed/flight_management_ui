import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Airline from '../Entity/airline';
const base_url="http://localhost:8089/flight";

@Injectable({
  providedIn: 'root'
})
export class AirlineService {

  constructor(private http:HttpClient) { }

  addAirline(airline:{airname:string,airphone:number,airaddress:string}){
   return this.http.post(base_url+"/airline/add",airline);
  }
  updateAirline(airline:Airline){
    return this.http.post(base_url+"/airline/update",airline);
   }
   getAirline(){
    return this.http.get(base_url+"/airlines");
   }
}
