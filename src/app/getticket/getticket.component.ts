import { Component, OnInit } from '@angular/core';
import { Flight } from '../Entity/flight';
import { Ticket } from '../Entity/ticket';
import { FlightService } from '../service/flight.service';
import { TicketService } from '../service/ticket.service';

@Component({
  selector: 'app-getticket',
  templateUrl: './getticket.component.html',
  styleUrls: ['./getticket.component.css']
})
export class GetticketComponent implements OnInit {

  ticket:Ticket=new Ticket
  tickets:Ticket[]=[]
  flights:Flight[]=[]
  constructor(private ticketSrvice:TicketService, private flightService:FlightService) { }

  ngOnInit(): void {
    
    const promise = this.ticketSrvice.getTicket();
    promise.subscribe((response) => {
      console.log(response);
      this.tickets = response as Ticket[]; 
    })
    const promise1= this.flightService.getFlightsbyId(1);
    promise1.subscribe((response) => {
      console.log(response);
      this.flights = response as Flight[]; 
    })
  }

}
