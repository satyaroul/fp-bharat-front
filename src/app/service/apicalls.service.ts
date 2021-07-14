import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class APIcallsService {
  baseURL = 'http://localhost:8000/';
  errorMsg : string;
  
  header = new HttpHeaders({'Content-Type':'application/json; charset=utf-8', 'responseType': 'text', 'Accept': 'application/json'})
  // headers = {'Content-Type':'application/json; charset=utf-8'};
  constructor(private http :HttpClient) { }
  
  // GET Requests
  GETAccountDetails(){
    // return this.http.get('http://backoffice-bharat:8000/accounts');
    return this.http.get(`${this.baseURL}accounts`);
  }
  GETSalesmanDetails(){
    return this.http.get(`${this.baseURL}salesman`);
  }
  GETProductDetails(){
    return this.http.get(`${this.baseURL}items`);
  }
  GETAllSaleBill(){
    return this.http.get(`${this.baseURL}sales`);
  }
  GETBillCount(){
    return this.http.get(`${this.baseURL}sales/count`);
  }
  GETAllItems(){
    return this.http.get(`${this.baseURL}items`);
  }

  // POST Requests
  POSTNewProductEntry(product){
    return this.http.post(`${this.baseURL}items/newProduct`, product, {headers: this.header});
    // .pipe(
    //   catchError(error=>{
    //     if (error.error instanceof ErrorEvent) {
    //       this.errorMsg = `Error: ${error.error.message}`;
    //   } else {
    //       this.errorMsg = `Error: ${error.message}`;
    //   }
    //   return ([]);
    //   })
    // );
  }
  POSTNewSaleEntry(bill){
    return this.http.post(`${this.baseURL}sales/sale_entry`, bill , {headers: this.header});
  }
  POSTNewAccountEntry(account){
    return this.http.post(`${this.baseURL}accounts/newAccount`, account, {headers: this.header});
  }




  ////////////////////////////////////////old//////////////////////////////////////////////////
  GETLogin(){
    // return this.http.get('https://ngdemoapi.getsandbox.com/login');
    // console.log(this.http.get('https://my-first-api-27588.firebaseio.com/'));
    return this.http.get(this.baseURL+'login.json');
  }
  GETSubmittedTransactions(){
    // return this.http.get('https://ngdemoapi.getsandbox.com/getSubmitedTransactions');
    return this.http.get('https://ngdemoapi.getsandbox.com/login')
  }

  // POSTSubmitingNewTransactions(newtrx){
  //   // return this.http.post('https://ngdemoapi.getsandbox.com/saveTransaction',newtrx);
  //   return this.http.post('https://ngdemoapi.getsandbox.com/saveTransaction',newtrx);
  // }

  GETCustomerDetailsByID(ID){
    // return this.http.get('https://ngdemoapi.getsandbox.com/customerById/'+ID);
    return this.http.get(this.baseURL+'customers/'+ID+'.json');
  }
  
  POSTNewCustomer(newCust){
    return this.http.post(this.baseURL+'customers.json',newCust);
  }
  
  POSTNewCustomerLogin(newLogin){
    return this.http.post(this.baseURL+'login.json',newLogin);
  }

  GETAllCustomersForAdmin(){
    return this.http.get(this.baseURL+'customers.json');
  }

  DELETECustomer(data){
    var uri = this.baseURL+'customers/'+data+'.json'
    return this.http.delete(uri);
  }

  POSTNewBranch(details){
    return this.http.post(this.baseURL+'branches.json',details);
  }

  GETBranchDetails(){
    return this.http.get(this.baseURL+'branches.json');
  }

  DELETEBranch(details){
    var uri =this.baseURL+'branches/'+details+'.json';
    return this.http.delete(uri);
  }

  POSTBeneficiary(ID,data){
    return this.http.post(this.baseURL+'customers/'+ID+'/beneficiary.json',data);
  }

  DELETEBeneficiary(custid,id){
    return this.http.delete(this.baseURL+'customers/'+custid+'/beneficiary/'+id+'.json');
  }

  PUTCustomerAddress(custid, data){
    return this.http.put(this.baseURL+'customers/'+custid+'/address.json',data);
  }

  PUTCustomerPhone(custid, data){
    return this.http.put(this.baseURL+'customers/'+custid+'/phone.json',data);
  }

  PUTBranchAddress(branchid, data){
    return this.http.put(this.baseURL+'branches/'+branchid+'/address.json',data);
  }

  PUTBranchPhone(branchid, data){
    return this.http.put(this.baseURL+'branches/'+branchid+'/contact.json',data);
  }

  POSTSubmitingNewTransactions(newtrx){
    return this.http.post('https://ngdemoapi.getsandbox.com/saveTransaction',newtrx);
  }

  GETDetailsByID(ID : string){
    return this.http.get('https://ngdemoapi.getsandbox.com/customerById/'+ID);
  }
}


