import { Component, OnInit } from '@angular/core';
import Discount from '../Entity/discount';
import { DiscountService } from '../service/discount.service';

@Component({
  selector: 'app-add-discount',
  templateUrl: './add-discount.component.html',
  styleUrls: ['./add-discount.component.css']
})
export class AddDiscountComponent implements OnInit {

  discount:Discount=new Discount()
  constructor( private discountService:DiscountService) { }

  save()
  {
    this.discountService.addDiscount(this.discount).subscribe(
      data=> {
        console.log(data) }
    );
  }
  ngOnInit(): void {
  }

}
