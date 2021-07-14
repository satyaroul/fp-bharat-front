import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/modals/product';
import { MasterOperationsService } from 'src/app/service/master-operations.service';

@Component({
  selector: 'add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  @ViewChild('closebtn') closebtn;
  product: Product;
  sgst: number;
  cgst: number;
  unit_per_package: number;
  p_rate_per_p: number;
  p_rate_per_c: number;
  s_rate_per_p: number;
  s_rate_per_c: number;
  // alerts = {
  //   type: 'success',
  //   msg: `Product Saved successfully`,
  //   timeout: 500
  // };
  constructor(private MasterOps: MasterOperationsService, private router: Router) { }

  ngOnInit(): void {
    console.log('here');
  }
  calculateGST(val) {
    this.sgst = val / 2;
    this.cgst = val / 2;
  }
  PcalcPcPriceToCs(i) {
    this.p_rate_per_c = i * this.unit_per_package;
  }
  PcalcCsPriceToPc(i) {
    this.p_rate_per_p = i / this.unit_per_package;
  }
  ScalcPcPriceToCs(i) {
    this.s_rate_per_c = i * this.unit_per_package;
  }
  ScalcCsPriceToPc(i) {
    this.s_rate_per_p = i / this.unit_per_package;
  }
  onSubmit(form: NgForm) {
    console.log('here');
    if (!form.value.DATA.discount && !form.value.DATA.discount_amount) {
      form.value.DATA.discount = 0;
      form.value.DATA.discount_amount = 0;
    } else if (!form.value.DATA.discount_amount) {
      form.value.DATA.discount_amount = 0;
    } else if (!form.value.DATA.discount) {
      form.value.DATA.discount = 0;
    }
    this.product = new Product(form.value.DATA.product_name, form.value.DATA.mfg_group_code,
      form.value.DATA.uom, form.value.DATA.packing_type, form.value.DATA.unit_per_package, form.value.DATA.hsn_code
      , form.value.DATA.gst, form.value.DATA.sgst, form.value.DATA.cgst, form.value.DATA.discount,
      form.value.DATA.discount_amount,
      form.value.DATA.mrp, form.value.DATA.p_rate_per_p,
      form.value.DATA.p_rate_per_c, form.value.DATA.s_rate_per_p, form.value.DATA.s_rate_per_c)
    this.MasterOps.SaveNewProduct(this.product);
    form.reset();
    // alert('Product saved Successfully')
  }

}
