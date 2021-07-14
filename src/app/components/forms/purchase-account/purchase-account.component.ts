import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'purchase-account',
  templateUrl: './purchase-account.component.html',
  styleUrls: ['./purchase-account.component.css']
})
export class PurchaseAccountComponent implements OnInit {
  bsValue = new Date();
  bill_date: string;
  date: string;
  purchase_account = {
    account_name:'',
    purchase_bill_id:'',
    
  }
  constructor() { }

  ngOnInit(): void {
  }
  getBillDateValue(val) {
    var date = val;
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    this.bill_date =
      (d <= 9 ? "0" + d : d) + "-" + (m <= 9 ? "0" + m : m) + "-" + y;

  }
  getDateValue(val) {
    var date = val;
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    this.date =
      (d <= 9 ? "0" + d : d) + "-" + (m <= 9 ? "0" + m : m) + "-" + y;

  }

}
