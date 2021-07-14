import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { APIcallsService } from 'src/app/service/apicalls.service';
import { SaleService } from 'src/app/service/sale.service';

@Component({
  selector: 'view-sales',
  templateUrl: './view-sales.component.html',
  styleUrls: ['./view-sales.component.css']
})
export class ViewSalesComponent implements OnInit, DoCheck {
  viewsale_col_name = ['Bill #', "Date",'Account Name', 'Address', 'Mobile No.', 'Salesman', 'Bill Amount', 'Action'];
  @Input() bill_data: any;

  constructor(private Sale: SaleService, private APIs: APIcallsService) { }

  ngOnInit(): void {
  }
  ngDoCheck(){
    // this.APIs.GETAllSaleBill().subscribe(res => {
    //   this.bill_data = res;
    // })
  }
  edit(i){

  }
  view(i){

  }
  delete(i){}

}
