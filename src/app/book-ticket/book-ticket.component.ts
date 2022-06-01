import { Component, OnInit,Input } from '@angular/core';
import Passeneger from '../Entity/passenger';
import { Ticket } from '../Entity/ticket';
import { TicketService } from '../service/ticket.service';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent implements OnInit {

  ticket:Ticket=new Ticket
  price:number=400;
  i:number=0;
  array:number[]=[];
  constructor(private ticketService:TicketService) { }
  

  save()
  {
    this.ticket.totalprice=this.price;
    console.log(this.ticket)
    this.ticketService.createTicket(this.ticket).subscribe(
      response=>{
        console.log(response);
      }
    )
  }

 
  ngOnInit(): void {
    console.log(history.state)
    this.ticket.flightid=history.state.data;
    this.ticket.userdetails=history.state.data1;
  }
  
   // onKeyup(value:any)
  // {
  //   for(let i=0;i<value;i++)
  //   {
  //     this.array.push(i);
  //     console.log()
  //   }
  //         this.seats=value;
  //         console.log(this.ticket.flightid)
  // }

}
