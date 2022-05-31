import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import User from '../Entity/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User= new User

  public barLabel: string = "Password strength:";
  public myColors = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853'];

  constructor(private router: Router, private loginservice: AuthenticationService) { }


  ngOnInit() {
    if(sessionStorage.getItem('role') === 'customer' || sessionStorage.getItem('role') === 'admin') {
      this.router.navigate(['noauth']);
    }
  }

  // Adds a new User
  signUp() {
    console.log(this.user);
    this.loginservice.signUp(this.user).subscribe(
      (response: any) => {
        console.log(response.message);
      },
      error=>{
        alert(error.error.message);
      }
    );
    
    
  }

  // UserName Validations
  nameFlag: boolean= false;
  validateName() {
    var flag =  /^[a-zA-Z ]+$/.test(this.user.username);
    if(!flag) {
      this.nameFlag=true;
    }
    else {
      this.nameFlag=false;
    }
  }

  // UserPhone valdiations
  phoneFlag:boolean=false;
    validatePhone(){
        let phone=String(this.user.phone);
        if(phone.length!=10){
            this.phoneFlag=true;
        }else{
            this.phoneFlag=false;
        }
    }

    //UserEmail Validation
    emailFlag:boolean=false;
    validateEmail(){
        var flag=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.user.useremail);
        if(!flag){
            this.emailFlag=true;
        }else{
            this.emailFlag=false;
        }
    }

    buttonFlag:boolean=true;
    enableButton(){
        this.buttonFlag=this.nameFlag||this.emailFlag||this.phoneFlag;
    }
}
