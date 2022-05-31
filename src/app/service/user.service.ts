import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import User from '../Entity/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl='http://localhost:8088/users';
  constructor(private http: HttpClient) { }
  

  createUser(user: User): Observable<Object>{
    return this.http.post('http://localhost:8088/users/add', user);
  }

  updateUser(user: object): Observable<Object>{
    return this.http.put(`${this.baseUrl}/updateUser/`, user);
  }

  deleteUser(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/deleteUser/${id}`,{ responseType: 'text'});
  }

  getUser(userId: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/searchUser/${userId}`);
  }

  getUser1(): Observable<any>{
    return this.http.get('http://localhost:8088/users');
  }

  getUserList(): Observable<any>{
    return this.http.get(`${this.baseUrl}/readAllUsers`)
  }
}
