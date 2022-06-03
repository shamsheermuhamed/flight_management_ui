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
  cancelTicket(ticketid:any){
    return this.http.delete("http://localhost:8088/flight/tickets/delete/"+ticketid);
   }

   getTicketById(userid:any)
   {
    return this.http.get("http://localhost:8088/flight/tickets/"+userid);
   }
}
