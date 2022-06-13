import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn=false;
  constructor(private loginService:AuthenticationService,private router:Router) { }

  ngOnInit(): void {
    this.loggedIn=this.loginService.isLoggedin();

  }
  
  logOutUser()
  {
    this.loginService.logout();
  }

}
