import { Component, OnInit, Input } from '@angular/core';
import { Flight } from '../Entity/flight';
import Passenger from '../Entity/passenger';

import { Ticket } from '../Entity/ticket';
import { DiscountService } from '../service/discount.service';
import { FlightService } from '../service/flight.service';
import { TicketService } from '../service/ticket.service';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent implements OnInit {

  addPass:boolean=false;
  showPass:boolean=false;
  ticket: Ticket = new Ticket
  discount: number = 0;
  flight:Flight=new Flight
  array: number[] = [];

  passenger:Passenger=new Passenger
  passengers:Array<Passenger>=[]

  constructor(private ticketService: TicketService,
    private discountService: DiscountService, 
    private flightService:FlightService) { }
  

  save() {
    console.log(this.ticket)
    this.ticketService.createTicket(this.ticket).subscribe(
      (response:any) => {
        console.log(response);
        alert(response.error.message);
      }
    )
  }

  getcoupon(coupon: any) {
    this.discountService.getDiscountbyCoupon(coupon).subscribe(
      (response: any) => {
        console.log(response.message)
        this.discount= response.amount;
        this.ticket.totalprice = this.ticket.totalprice - response.amount;
        this.addPass=false;
      })

  }
  getTotal(seat:number)
  {
      this.ticket.totalprice=this.flight.price*seat;
      console.log(this.flight.price);
      this.addPass=false;
  }

  ngOnInit(): void {
    console.log(history.state)
    this.ticket.flightid = history.state.flightdata;
    this.ticket.userdetails = history.state.data;

    this.flightService.getFlightsbyId(this.ticket.flightid).subscribe(
      (response:any)=>{
        console.log(response);
        this.flight=response;
      }
    );
  }

  addpass()
  {
    this.addPass=true;
  }
  OK()
  {
    this.passengers.push(this.passenger);
    this.passenger=new Passenger
    console.log(this.passengers)
    this.ticket.passengers=this.passengers;
    this.showPass=true;
    this.addPass=false;
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
