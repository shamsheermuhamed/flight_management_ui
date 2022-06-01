import { Component, OnInit } from '@angular/core';
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
  seats:number=0;
  constructor(private ticketService:TicketService) { }
  array:number[]=[];
  

  save()
  {
    this.ticket.totalseats=this.seats;
    this.ticketService.createTicket(this.ticket).subscribe(
      response=>{
        console.log(response);
      }
    )
  }

  onKeyup(value:any)
  {
    for(let i=0;i<value;i++)
    {
      this.array.push(i);

    }
          this.seats=value;
  }
  ngOnInit(): void {
    this.array=[]
  }


}
