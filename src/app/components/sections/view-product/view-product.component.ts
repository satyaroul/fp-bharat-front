import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/modals/product';

@Component({
  selector: 'view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  @Input() products : Array<Product>;
  view_item_cols = ['Product', 'HSN', 'MFG', 'UOM', 'Pack', 'Packing Qnty.', 'Purchase Rate/Pack', 'Sale Rate/Pack', 'GST', 'M.R.P.', 'Discount%', 'Action'];

  constructor() { }

  ngOnInit(): void {
  }
  edit(i){

  }
  view(i){

  }
  delete(i){
    
  }

}
