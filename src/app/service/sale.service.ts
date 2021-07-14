import { Injectable } from '@angular/core';
import { SaleEntry } from '../modals/saleEntry.modal';
import { ItemData } from '../modals/saleItem.modal';
import { APIcallsService } from './apicalls.service';
import { GeneratePDFService } from './generate-pdf.service';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  newSaleEnty : SaleEntry;
  saleItems : ItemData[] = [];
  acData: any;
  bill_id: string;
  date: string;
  summary = {
    basic_amt :0,
    taxable_amt : 0,
    discount_amt : 0,
    net_amt : 0,
    cgst : 0,
    sgst : 0,
  };
  

  constructor(private APIs : APIcallsService, private PDF : GeneratePDFService) { }

  prepareSaleData(action){
    this.newSaleEnty = new SaleEntry(this.acData.ac_id,this.acData.account_name, this.acData.ac_address
      ,this.acData.ac_mobile,this.acData.salesman_name,this.date,this.summary.discount_amt,this.summary.basic_amt,this.summary.taxable_amt
      ,this.summary.net_amt,this.bill_id,this.summary.cgst, this.summary.sgst, this.saleItems);
    console.log(JSON.stringify(this.newSaleEnty));
      this.APIs.POSTNewSaleEntry(JSON.stringify(this.newSaleEnty)).subscribe((res)=>{
        console.log(res);
      });
      this.PDF.invoiceData = this.newSaleEnty;
      this.PDF.generateBill(action);
  }

  prepareSaleItems(items){
    console.log(items);
    this.saleItems.push(items);
    this.calcTotalBillAmt();
  }

  calcTotalBillAmt (){
   var net_amt = 0; 
   var gst = 0;
   var taxable_amt= 0
   var basic_amt = 0;
   var discount_amt = 0;
    this.saleItems.forEach(element => {
      console.log(element.basic_amount)
      net_amt = net_amt+ element.net_amount;
      basic_amt = basic_amt+ element.basic_amount;
      taxable_amt = taxable_amt+element.taxable_amount;
      discount_amt = discount_amt + element.discount;
      gst = gst + element.gst_val;
    });
    this.summary.basic_amt = parseFloat(basic_amt.toFixed(2));
    this.summary.taxable_amt = parseFloat(taxable_amt.toFixed(2));
    this.summary.net_amt = parseFloat(net_amt.toFixed(2));
    this.summary.discount_amt = parseFloat(discount_amt.toFixed(2));
    this.summary.cgst = gst/2;
    this.summary.sgst = gst/2;
    this.summary.cgst = parseFloat(this.summary.cgst.toFixed(2));
    this.summary.sgst = parseFloat(this.summary.sgst.toFixed(2));

    // this.newSaleEnty.bill_items = this.saleItems;
    console.log(this.summary)
  }

  deleteItem(index){
    this.saleItems.splice(index, 1);
    console.log(this.saleItems);
    this.calcTotalBillAmt();
  }

}
