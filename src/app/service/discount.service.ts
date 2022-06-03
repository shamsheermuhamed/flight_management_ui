import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Discount from '../Entity/discount';

const base_url="http://localhost:8089/flight";

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  constructor(private http:HttpClient) { }

  addDiscount(discount:Discount){
   return this.http.post(base_url+"/discount/add",discount);
  }
   getDiscount(){
    return this.http.get(base_url+"/discounts");
   }
   getDiscountbyCoupon(coupon:string){
    return this.http.get(base_url+"/discounts/"+coupon);
   }
   deleteCouponByCode(coupon:any)
   {
    return this.http.delete(base_url+"/discounts/delete/"+coupon);
   }
}
