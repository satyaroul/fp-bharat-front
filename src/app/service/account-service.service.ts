import { Injectable } from '@angular/core';
import { APIcallsService } from './apicalls.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {
  accountDetails : any;
  accountName = [];
  constructor(private APIs: APIcallsService, private route: Router) { }

  allAccounts(){
    this.APIs.GETAccountDetails().subscribe(response => {
      this.accountDetails = response;
      console.log(this.accountDetails)
      this.accountDetails.forEach(element => {
        this.accountName = element.ACCOUNT_NAME;
      });
    })
  }

}
