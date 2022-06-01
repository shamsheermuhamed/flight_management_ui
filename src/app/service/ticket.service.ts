import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Passeneger from '../Entity/passenger';
import { Ticket } from '../Entity/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  constructor(private http:HttpClient) { }

  createTicket(ticket:{passengers:Passeneger[],userdetails:number,totalseats:number
    totalprice:number,flightid:number}){
   return this.http.post("http://localhost:8088/flight/tickets/create",ticket);
  }
  updateticket(ticket:Ticket){
    return this.http.post("http://localhost:8088/flight/tickets/update",ticket);
   }
   getTicket(){
    return this.http.get("http://localhost:8088/flight/tickets");
   }
}
