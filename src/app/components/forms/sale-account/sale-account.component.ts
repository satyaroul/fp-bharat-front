import { AfterContentInit, Component, DoCheck, ElementRef, OnChanges, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountServiceService } from 'src/app/service/account-service.service';
import { APIcallsService } from 'src/app/service/apicalls.service';
import { SaleService } from 'src/app/service/sale.service';


@Component({
  selector: 'sale-account',
  templateUrl: './sale-account.component.html',
  styleUrls: ['./sale-account.component.css']
})
export class SaleAccountComponent implements OnInit, DoCheck, AfterContentInit {
  accountData = {
    account_name: "",
    salesman_name : "",
    ac_id: 0,
    ac_address: "",
    ac_mobile: "",
    ac_gstn: "",
    ac_beat: ""
  }

  accounts: any;
  origAccounts: any;
  salesman : any;
  origiSalesman: any;
  @ViewChild("selectList", { static: false }) selectList: ElementRef;
  @ViewChild("selectSalesman", { static: false }) selectSalesman: ElementRef;

  filterAccount(event) {
    console.log(event);
    if (!event) {
      this.accounts = this.origAccounts;
    } // when nothing has typed*/
    if (typeof event === "string") {
      this.accounts = this.origAccounts.filter(a =>
        a.ACCOUNT_NAME.toLowerCase().startsWith(event.toLowerCase())
      );
    }
    // this.selectList.nativeElement.focus();
    this.selectList.nativeElement.size = this.accounts.length + 1;
  }
  filterSalesman(event) {
    if (!event) {
      this.salesman = this.origiSalesman;
    } // when nothing has typed*/
    if (typeof event === "string") {
      this.salesman = this.origiSalesman.filter(a =>
        a.NAME.toLowerCase().startsWith(event.toLowerCase())
      );
    }
    this.selectSalesman.nativeElement.size = this.salesman.length + 1;
  }
  selected(item) {
    this.accountData.ac_id = item.idACCOUNT_HOLDERS;
    this.accountData.account_name = item.ACCOUNT_NAME;
    this.accountData.ac_address = item.ADDRESS;
    this.accountData.ac_mobile = item.MOBILE_NO;
    this.accountData.ac_beat = item.BEAT_AREA;
    this.accountData.ac_gstn = item.GSTN;
    console.log(this.accountData);
  }
  selectedSalesman(item){
    this.accountData.salesman_name = item.NAME;
    this.Sale.acData = this.accountData;
  }
  constructor(private APIs: APIcallsService, private Sale : SaleService) {
  }

  ngOnInit(): void {
    this.APIs.GETAccountDetails().subscribe(response => {
      this.accounts = response;
      this.origAccounts = response;
    });
    this.APIs.GETSalesmanDetails().subscribe(response => {
      this.salesman = response;
      this.origiSalesman = response;
    });
  }
  ngOnChanges() {}
  ngDoCheck() {}
  ngAfterContentInit() {}
  onSubmit(f: NgForm){

  }

}
