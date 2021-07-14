import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIcallsService } from 'src/app/service/apicalls.service';
import { GeneratePDFService } from 'src/app/service/generate-pdf.service';
import { SaleService } from 'src/app/service/sale.service';

@Component({
  selector: 'sale-entry',
  templateUrl: './sale-entry.component.html',
  styleUrls: ['./sale-entry.component.css']
})
export class SaleEntryComponent implements OnInit, DoCheck, OnChanges {
  item_col_name = ['SL', 'HSN', 'Product Name', 'UOM', 'Pack', 'Qty', 'Free', 'Sale Rate', 'M.R.P', 'Discount', 'Dis Amt', 'GST', 'Net Amount', 'Action'];
  summary_col_name = ['Basic Amt', 'Discount', 'Taxable', 'CGST Amt', 'SGST Amt', 'Bill Amount'];
  modalAccount = 'account';
  modalProduct = 'product';
  billcount: number;
  table_data: any;
  summary: any;
  date: string;
  bill_id_prefix: string;
  billnumber: string;
  bsValue = new Date();
  constructor(private Sale: SaleService, private APIs: APIcallsService, private router: Router, private PDF: GeneratePDFService) { }

  selectedBillPrefix() {
    window.localStorage.setItem('bill_id_prefix', this.bill_id_prefix);
  }
  getValue(val) {
    var date = val;
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    this.date =
      (d <= 9 ? "0" + d : d) + "-" + (m <= 9 ? "0" + m : m) + "-" + y;

  }
  ngOnInit(): void {
    this.bill_id_prefix = window.localStorage.getItem('bill_id_prefix')
    this.APIs.GETBillCount().subscribe((res) => {
      this.billcount = res[0].BillCount + 1
      this.billnumber = `${this.bill_id_prefix}-${this.billcount}`
    });

  }
  ngOnChanges() {
    this.bill_id_prefix = window.localStorage.getItem('bill_id_prefix')
    this.APIs.GETBillCount().subscribe((res) => {
      this.billcount = res[0].BillCount + 1
      this.billnumber = `${this.bill_id_prefix}-${this.billcount}`
    });
  }
  ngDoCheck() {
    this.table_data = this.Sale.saleItems;
    this.summary = this.Sale.summary;
  }
  delete(index) {
    this.Sale.deleteItem(index);
  }
  edit(i) {

  }
  save() {
    this.Sale.bill_id = this.billnumber;
    this.Sale.date = this.date;
    this.Sale.prepareSaleData("download");
    window.location.reload();
    // this.router.navigateByUrl('/refresh', { skipLocationChange: true }).then(() => {
    //   this.router.navigate(['/sales']);
    // });

  }
  save_print() {
    // window.print();
    this.Sale.bill_id = this.billnumber;
    this.Sale.date = this.date;
    this.Sale.prepareSaleData("print");
    // window.location.reload();
    // this.save();

  }

}
