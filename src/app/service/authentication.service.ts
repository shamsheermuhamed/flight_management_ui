import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from '../Entity/user';
const url= 'http://localhost:8088/';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  cred:any;
  //for testing
  generateToken(credential:any){
    return this.httpClient.post("http://localhost:8088/signin",credential)

  }

  loginUser(token:any){
    localStorage.setItem("token",token);
  }
  isLoggedin()
  {
    let token= localStorage.getItem("token");
    if(token==undefined || token==='' ||token==null)
    {
      return false;
    }
    else{
      return true;
    }
  }
  logout()
  {
    localStorage.removeItem('token');
    return true;
  }
  getToken(){
    return localStorage.getItem("token");
  }

  signUp(user: {username:string,userpassword:string,useremail:string,role:string}) {
    
    return this.httpClient.post('http://localhost:8088/flight/users/add', user);
  }

  getId(username:string)
  {
    return this.httpClient.get('http://localhost:8088/flight/users/getUserId/{username}');
  }


  //Retrieves user token and checks authentication
  // authenticate(username:string, password:string) {
 
  // return this.httpClient.post<any>('http://localhost:8088/token',
  //   {username, password}).subscribe(
  //     userData => {
  //       sessionStorage.setItem('username', username);
  //       let tokenStr = 'Bearer' +userData.token;

  //       sessionStorage.setItem('token', tokenStr);
  //       return userData;
  //     }
  //   );
  // }
  
  // // Checks whether the user is logged in
  // isUserLoggedIn():boolean {
  //   let user = sessionStorage.getItem('token')
  //   return !(user === null)
  // }

  // // Removes user session(logout)
  // logOut() {
  //   sessionStorage.removeItem('token');
  // }

  // // Retrives role of user(customer/admin)
  // getRole(username:string) {
  //   return this.httpClient.get('http://localhost:9092/api/auth/getRole/{username}'+ username);
  // }

  // // Adds a new User
  

}
