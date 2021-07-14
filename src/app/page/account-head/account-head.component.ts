import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/modals/account';
import { APIcallsService } from 'src/app/service/apicalls.service';

@Component({
  selector: 'account-head',
  templateUrl: './account-head.component.html',
  styleUrls: ['./account-head.component.css']
})
export class AccountHeadComponent implements OnInit {
  accounts : Array<Account>;
  loading =  true;
  constructor(private API : APIcallsService) { }

  ngOnInit(): void {
    this.API.GETAccountDetails().subscribe(res=>{
      var accountList;      
      accountList = res;
      console.log(accountList);
      this.accounts = accountList.map(i =>(
        new Account(i.ACCOUNT_GROUP, i.ACCOUNT_NAME, i.ACCOUNT_TYPE, i.ADDRESS, i.BEAT_AREA, i.GSTN, i.MOBILE_NO, i.PAN)
      ));
      this.loading = false;
      console.log(this.accounts);
    })
  }
  getAccountList(){
    this.API.GETAccountDetails().subscribe(res=>{
      var accountList;
      accountList=res;
      this.accounts = accountList.map(i =>(
        new Account(i.ACCOUNT_GROUP, i.ACCOUNT_NAME, i.ACCOUNT_TYPE, i.ADDRESS, i.BEAT_AREA, i.GSTN, i.MOBILE_NO, i.PAN)
      ))
      this.loading = false;
    })
  }

}
