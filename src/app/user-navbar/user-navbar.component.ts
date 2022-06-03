import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import User from '../Entity/user';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {

  user:User=new User;
  constructor(private router:Router) { }

  logged:boolean=false;

  userHome(){
    this.router.navigate(['usernavbar'],{state:{data:this.user.userid}})
  }
  bookTicket(){
    this.router.navigate(['userhome'],{state:{data:this.user.userid}})
  }
  getticket(){
    this.router.navigate(['getticket'],{state:{data:this.user.userid}})
  }
  ngOnInit(): void {
    console.log(history.state)
    this.user.userid=history.state.data;
  }

}
