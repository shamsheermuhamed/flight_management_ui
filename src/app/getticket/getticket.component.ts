import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from '../Entity/flight';
import { Ticket } from '../Entity/ticket';
import { AuthenticationService } from '../service/authentication.service';
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
  constructor(private ticketSrvice:TicketService, private flightService:FlightService,
      private router:Router, private loginService:AuthenticationService) { }

  cancelTicket(ticketid:any)
  {
      this.ticketSrvice.cancelTicket(ticketid).subscribe(
        response=>{
          console.log(response);
        }
      )
      
  }

  ngOnInit(): void {
    this.ticket.userdetails = Number(this.loginService.getUserId());
    const promise = this.ticketSrvice.getTicketById(this.ticket.userdetails);
    promise.subscribe((response) => {
      console.log(response);
      this.tickets = response as Ticket[]; 
    }
    )
    // const promise1= this.flightService.getFlightsbyId(1);
    // promise1.subscribe((response) => {
    //   console.log(response);
    //   this.flights = response as Flight[]; 
    // })
  }

}
