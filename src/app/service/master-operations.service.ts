import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Account } from '../modals/account';
import { Product } from '../modals/product';
import { APIcallsService } from './apicalls.service';

@Injectable({
  providedIn: 'root'
})
export class MasterOperationsService {
  productResponse: any;
  a: Product
  allProducts: Observable<Array<Product>>;
  allAccounts: Observable<Array<Account>>;
  constructor(private API: APIcallsService, private router: Router) { }

  SaveNewProduct(product): Observable<any> {
    console.log('herer');
    var parsedData = JSON.stringify(product);
    this.API.POSTNewProductEntry(parsedData).subscribe(
      res => {
        console.log(res);
        this.API.GETAllItems().subscribe(respo => {
          this.productResponse = respo;
          this.allProducts = this.productResponse.map(i => (
            new Product(i.PRODUCT_NAME, i.MFG_GROUP_CODE, i.UOM, i.PACKING_TYPE, i.UNIT_PER_PACKAGE, i.HSN_CODE, i.GST, i.SGST, i.CGST, i.DISCOUNT, i.DISCOUNT_AMOUNT, i.MRP, i.P_RATE_PER_P, i.P_RATE_PER_C, i.S_RATE_PER_P, i.S_RATE_PER_C)
          ));
        });
      });
    return this.allProducts;
  }

  SaveNewAccount(account): Observable<any> {
    var parsedData = JSON.stringify(account);
    console.log(parsedData);
    this.API.POSTNewAccountEntry(parsedData).subscribe(
      res =>{
        this.API.GETAccountDetails().subscribe(respo =>{
          var accountList;
          accountList=respo;
          this.allAccounts = accountList.map(i =>{
            new Account(i.ACCOUNT_GROUP, i.ACCOUNT_NAME, i.ACCOUNT_TYPE, i.ADDRESS, i.BEAT_AREA, i.GSTN, i.MOBILE_NO, i.PAN);
          })
        })
      }
    )
      return this.allAccounts;
  }
}
