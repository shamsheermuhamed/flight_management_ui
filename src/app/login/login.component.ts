import { Component, OnInit } from '@angular/core';
import User from '../Entity/user';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User=new User
  invalidLogin = false;
  public role=""
  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit(): void {
    
  }


  checkLogin()
  {
    let credential={username:this.user.username,password:this.user.userpassword}
    this.loginservice.generateToken(credential).subscribe(
      (response:any)=>{
        this.loginservice.loginUser(response.token);
        console.log(response.token);
        // console.log(response.userid);
        // console.log(response.role);
        let x=response.userid;
        console.log(x)
        if(response.role==='ROLE_USER')
         this.router.navigate(['userhome'],{state:{data:response.userid}})
        else window.location.href="/adminhome";
      },
      error=>{
        alert(error.error);
       
      }

    );
  }
  
  // Check user for authenticatoin
  // checkLogin() {
  //   if(this.loginservice.authenticate(this.user.username, this.user.password)) {
  //     console.log(this.loginservice.authenticate(this.user.username, this.user.password));
      
  //     // this.loginservice.getRole(this.username).subscribe((data: any)=> {
  //     //   this.user = data;
  //     //   console.log(data);
  //     //   this.redirect();
  //     // });
  //   }
  //   else {
  //     console.log("Invalid Login Credentials..");
  //     this.invalidLogin = true;
  //   }
  // }

  // Redirect based on the user role
  // redirect() {
  //   if(this.user.role === 'ROLE_USER') {
  //     sessionStorage.setItem('role', 'customer');
  //     sessionStorage.setItem('userId', String(this.user.userId));
  //     this.invalidLogin = false;
  //     this.router.navigate(["/userhome"]).then(()=> {
  //       window.location.reload();
  //     });
  //   }
  //   else if(this.user.role === 'ROLE_ADMIN') {
  //     sessionStorage.setItem('role', 'admin');
  //     sessionStorage.setItem('userId', String(this.user.userId));
  //     this.invalidLogin = false;
  //     this.router.navigate(["adminpanel"]).then(()=> {
  //       window.location.reload();
  //     });
  //   }
  // }


}
