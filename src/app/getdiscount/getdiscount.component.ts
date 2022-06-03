import { Component, OnInit } from '@angular/core';
import Discount from '../Entity/discount';
import { DiscountService } from '../service/discount.service';

@Component({
  selector: 'app-getdiscount',
  templateUrl: './getdiscount.component.html',
  styleUrls: ['./getdiscount.component.css']
})
export class GetdiscountComponent implements OnInit {

  discount:Discount[]=[]
  constructor(private discountService: DiscountService) { }

  ngOnInit(): void {

    const promise = this.discountService.getDiscount();
    promise.subscribe((response) => {
      console.log(response);
      this.discount = response as Discount[]; 
    })
  }
  
  deleteById(couponcode:any)
  {
      this.discountService.deleteCouponByCode(couponcode).subscribe(
        response=>{
          console.log(response);
        }
      )
  }

}
