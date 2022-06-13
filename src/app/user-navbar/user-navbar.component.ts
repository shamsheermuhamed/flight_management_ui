import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import User from '../Entity/user';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {

  user:User=new User;
  constructor() { }

  logged:boolean=false;
  islogged:boolean=true;
  
  ngOnInit(): void {
    
  }

}
