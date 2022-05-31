import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn=false;
  constructor(private loginService:AuthenticationService) { }

  ngOnInit(): void {
    this.loggedIn=this.loginService.isLoggedin();
  }
  panel(){

  }

  logOutUser()
  {
    this.loginService.logout();
  }

}
