import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { $ } from 'protractor';
import { from } from 'rxjs';
import { APIcallsService } from 'src/app/service/apicalls.service';
import { SaleService } from 'src/app/service/sale.service';
import { ItemData } from '../../../modals/saleItem.modal';

@Component({
  selector: 'sale-item',
  templateUrl: './sale-item.component.html',
  styleUrls: ['./sale-item.component.css']
})
export class SaleItemComponent implements OnInit, AfterViewInit {
  modalItem = 'selectItem';
  itemTable = ['Product Name', 'Available Stock', 'Action'];
  searchItemText : string;
  filterText: string;
  hsn: string;
  itemData: ItemData;
  item_id: number;
  item_name: string;
  uom: string;
  pack: number;
  qty: number;
  free: number;
  net_qty: number;
  discount: number;
  discount_rate: number;
  basic_amount: number;
  taxable_amount: number;
  net_amount: number;
  unit_per_pack: number;
  mrp: number;
  s_rate_per_p : number;
  s_rate_per_c : number;
  gst: number;
  gst_val: number;
  products: any;
  origProducts: any;
  @ViewChild("selectList", { static: false }) selectList: ElementRef;
  @ViewChild("el") el:ElementRef ; 

  constructor(private APIs: APIcallsService, private SaleService: SaleService) {
  }

  ngOnInit(): void {
    this.APIs.GETProductDetails().subscribe(response => {
      this.products = response;
      this.origProducts = response;
    });
  }

  ngAfterViewInit(){
    
  }
  openModal(event){
    // console.log(event);
    // event.dataset.target.modal('show');
    // $('#selectItem').modal('show');
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
    this.searchItemText = null;
    this.item_name = item.PRODUCT_NAME;
    this.hsn = item.HSN_CODE
    this.uom = item.UOM;
    this.item_id = item.idITEMS_PK;
    this.unit_per_pack = item.UNIT_PER_PACKAGE;
    this.mrp = item.MRP;
    this.s_rate_per_p = item.S_RATE_PER_P;
    this.s_rate_per_c = item.S_RATE_PER_C;
    this.gst = item.GST;

  }

  packCalc() {  
    if (this.pack == null  || this.pack == undefined && this.qty != null) {
      this.pack = 0;
    } else if (this.pack && this.pack != null){
      this.qty = this.pack * this.unit_per_pack;
    }
    this.calPrice();
  }
  calPrice() {
    // console.log(val)
    var amt;
    switch (this.discount_rate) {
      case 0:
        this.discount = 0;
        break;
      case null:
        this.discount = null;
      default:
        break;
    }
    if (this.discount_rate && this.discount_rate != 0 || this.discount_rate != null) {
      amt = this.discount_rate / 100;
      this.basic_amount = this.qty * this.s_rate_per_p;
      this.discount = this.basic_amount * amt;
      this.discount = parseFloat(this.discount.toFixed(2));
      this.taxable_amount = this.basic_amount - this.discount;
    } else if (this.discount && this.discount != 0 || this.discount != null) {
      this.basic_amount = this.qty * this.s_rate_per_p;
      this.taxable_amount = this.basic_amount - this.discount;
    } else {
      this.basic_amount = this.qty * this.s_rate_per_p
      this.taxable_amount = this.basic_amount;
      this.discount = 0;
      this.discount_rate = 0;
    }
    if (this.free == undefined || this.free == null) {
      this.free = 0;
    } else {
      this.net_qty = this.free + this.qty;
    }
    this.priceWithGST();
  }
  priceWithGST() {
    var rate = this.gst / 100;
    this.gst_val = this.taxable_amount * rate;
    this.net_amount = this.taxable_amount + this.gst_val;
    this.net_amount = parseFloat(this.net_amount.toFixed(2));
  }
  reset(value: NgForm): void {
    value.reset();
  }
  onSubmit(form: NgForm): void {
    console.log(form.value.DATA);
    this.itemData = new ItemData(this.item_id, this.item_name, this.hsn, this.uom,
      this.pack, this.qty, this.free, this.net_qty,this.discount, this.discount_rate, this.basic_amount,
      this.taxable_amount, this.unit_per_pack, this.mrp, this.gst, this.net_amount, this.gst_val,this.s_rate_per_p, this.s_rate_per_c)
    this.SaleService.prepareSaleItems(this.itemData);
    form.reset();
    this.el.nativeElement.focus();
    this.el.nativeElement.click();
  }
  cisl(i){
    console.log(i);
  }

}
