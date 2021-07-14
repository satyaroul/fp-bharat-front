import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/modals/product';
import { PurchaseItem } from 'src/app/modals/purchaseItem';
import { APIcallsService } from 'src/app/service/apicalls.service';

@Component({
  selector: 'purchase-items',
  templateUrl: './purchase-items.component.html',
  styleUrls: ['./purchase-items.component.css']
})
export class PurchaseItemsComponent implements OnInit {
  purchase_item_col_name = ["Product Name", "UOM", "Pack Qnty", "Loose Unit", "Rate/Pc", "Rate/Pack", "Discount%", "Discount Amt", "Total Rate", "Action"]
  itemTable = ['Product Name', 'Available Stock', 'Action'];
  purchase_items: PurchaseItem[] = [];
  searchItemText: string;
  datamodal = "purchase_item"
  purchase_item = {
    product_id: "",
    product_name: "",
    packaging_type: "",
    uom: "",
    unit_per_package: 0,
    packing_qty: 0,
    loose_unit: 0,
    rate_per_pc: 0,
    rate_per_pk: 0,
    disocunt_rate: 0,
    discount_amt: 0,
    total_rate: 0
  };
  products: any;
  origProducts: any;
  @ViewChild("selectList", { static: false }) selectList: ElementRef;
  @ViewChild("input") input: ElementRef;

  constructor(private APIs: APIcallsService) { }

  ngOnInit(): void {
    this.APIs.GETProductDetails().subscribe(response => {
      this.products = response;
      this.origProducts = response;
    });
  }

  filterItem(event) {
    if (!event) {
      this.products = this.origProducts;
    } // when nothing has typed*/
    if (typeof event === "string") {
      this.products = this.origProducts.filter(a =>
        a.PRODUCT_NAME.toLowerCase().includes(event.toLowerCase())
      );
    }
    this.selectList.nativeElement.size = this.products.length + 1;
  }
  selected(item) {
    this.products = this.origProducts;
    this.purchase_item.product_name = item.PRODUCT_NAME;
    this.purchase_item.product_id = item.idITEMS_PK;
    this.purchase_item.packaging_type = item.PACKING_TYPE;
    this.purchase_item.uom = item.UOM;
    this.purchase_item.unit_per_package = item.UNIT_PER_PACKAGE;
    this.purchase_item.rate_per_pc = item.P_RATE_PER_P;
    this.purchase_item.rate_per_pk = item.P_RATE_PER_C;
    this.searchItemText = '';
  }
  priceCalc(event, i) {
    if (i != null) {
      this.purchase_items[i].total_rate = this.purchase_items[i].p_rate_per_c * event;
    } else {
      this.purchase_item.total_rate = this.purchase_item.rate_per_pk * event;
    }
    
  }
  add() {
    this.purchase_items.push(new PurchaseItem(this.purchase_item.product_id, this.purchase_item.product_name, this.purchase_item.packaging_type,
      this.purchase_item.uom, this.purchase_item.unit_per_package, this.purchase_item.packing_qty,
      this.purchase_item.loose_unit, this.purchase_item.rate_per_pk, this.purchase_item.rate_per_pc, this.purchase_item.disocunt_rate,
      this.purchase_item.discount_amt, this.purchase_item.total_rate, false));

    this.purchase_item.product_id = '';
    this.purchase_item.product_name = '';
    this.purchase_item.packaging_type = '';
    this.purchase_item.uom = '';
    this.purchase_item.unit_per_package = 0;
    this.purchase_item.packing_qty = 0;
    this.purchase_item.loose_unit = 0;
    this.purchase_item.rate_per_pk = 0;
    this.purchase_item.rate_per_pc = 0;
    this.purchase_item.disocunt_rate = 0;
    this.purchase_item.discount_amt = 0;
    this.purchase_item.total_rate = 0;

    this.input.nativeElement.focus();
    this.input.nativeElement.click();
  }
  edit(i) {
    this.purchase_items[i].isEdit=true
  }
  delete(i) {
    this.purchase_items.splice(i);
  }
  change(i){
    this.purchase_items[i].isEdit=false
  }

}
