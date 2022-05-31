import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Discount from '../Entity/discount';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  constructor(private http:HttpClient) { }

  addDiscount(discount:Discount){
   return this.http.post("http://localhost:8089/flight/discount/add",discount);
  }
  updateDiscount(discount:Discount){
    return this.http.post("http://localhost:8089/flight/discount/update",discount);
   }
   getDiscount(){
    return this.http.get("http://localhost:8089/flight/discounts");
   }
}
