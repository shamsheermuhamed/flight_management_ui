import { Component, OnInit, Input } from '@angular/core';
import { Flight } from '../Entity/flight';
import Passenger from '../Entity/passenger';

import { Ticket } from '../Entity/ticket';
import { AuthenticationService } from '../service/authentication.service';
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
    private flightService:FlightService, private loginService:AuthenticationService) { }
  

  save() {
    this.ticket.flightid = Number(localStorage.getItem("flightid"));
    this.ticket.userdetails = Number(this.loginService.getUserId())
    console.log(this.ticket)
    this.ticketService.createTicket(this.ticket).subscribe(
      (response:any) => {
        console.log(response);
        alert(response.error.message);
      }
    )
  }

  getcoupon(coupon: any) {
    if(coupon!=undefined){
    this.discountService.getDiscountbyCoupon(coupon).subscribe(
      (response: any) => {
        console.log(response.message)
        console.log(response.amount)
        this.discount= response.amount;
        if(response.amount!=NaN || response.amount!=undefined || this.ticket.totalprice!=undefined) 
          this.ticket.totalprice = this.ticket.totalprice - response.amount;
        else
          this.ticket.totalprice = this.ticket.totalprice

        this.addPass=false;
      })
    }
  }
  getTotal(seat:number)
  {
      this.ticket.totalprice=this.flight.price*seat;
      console.log(this.flight.price);
      this.addPass=false;
  }

  ngOnInit(): void {
    this.ticket.flightid = Number(localStorage.getItem("flightid"));
    console.log(this.ticket.flightid)
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
