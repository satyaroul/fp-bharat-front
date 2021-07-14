import { Component, OnChanges, OnInit } from '@angular/core';
import { Product } from 'src/app/modals/product';
import { APIcallsService } from 'src/app/service/apicalls.service';
import { ItemsService } from 'src/app/service/items.service';
import { MasterOperationsService } from 'src/app/service/master-operations.service';

@Component({
  selector: 'item-head',
  templateUrl: './item-head.component.html',
  styleUrls: ['./item-head.component.css']
})
export class ItemHeadComponent implements OnInit {
  loading = true;
  products : Array<Product>;
  constructor(private masterOps : MasterOperationsService, private API : APIcallsService) { }

  ngOnInit(): void {
    this.API.GETAllItems().subscribe(respo => {
      var productResponse;
      productResponse = respo;
      this.products = productResponse.map(i => (
        new Product(i.PRODUCT_NAME, i.MFG_GROUP_CODE, i.UOM, i.PACKING_TYPE, i.UNIT_PER_PACKAGE, i.HSN_CODE, i.GST, i.SGST, i.CGST, i.DISCOUNT, i.DISCOUNT_AMOUNT, i.MRP, i.P_RATE_PER_P, i.P_RATE_PER_C, i.S_RATE_PER_P, i.S_RATE_PER_C)
      ));
      this.loading = false;
    });
  }
  getProductList(){
    this.API.GETAllItems().subscribe(respo => {
      var productResponse;
      productResponse = respo;
      this.products = productResponse.map(i => (
        new Product(i.PRODUCT_NAME, i.MFG_GROUP_CODE, i.UOM, i.PACKING_TYPE, i.UNIT_PER_PACKAGE, i.HSN_CODE, i.GST, i.SGST, i.CGST, i.DISCOUNT, i.DISCOUNT_AMOUNT, i.MRP, i.P_RATE_PER_P, i.P_RATE_PER_C, i.S_RATE_PER_P, i.S_RATE_PER_C)
      ));
      this.loading = false;
    });
  }
}
