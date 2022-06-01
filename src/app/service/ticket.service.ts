import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from '../Entity/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  constructor(private http:HttpClient) { }

  createTicket(ticket:Ticket){
   return this.http.post("http://localhost:8089/flight/tickets/create",ticket);
  }
  updateticket(ticket:Ticket){
    return this.http.post("http://localhost:8089/flight/tickets/update",ticket);
   }
   getTicket(){
    return this.http.get("http://localhost:8089/flight/tickets");
   }
}
