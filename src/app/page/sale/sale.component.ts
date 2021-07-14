import { Component, DoCheck, OnInit } from '@angular/core';
import { ItemData } from 'src/app/modals/saleItem.modal';
import { APIcallsService } from 'src/app/service/apicalls.service';
import { SaleService } from 'src/app/service/sale.service';

@Component({
  selector: 'sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {
  navs = [
    {
      id: 'sale_entry',
      name: 'Sale Entry',
      selector: 'sale_entry'
    },
    {
      id: 'view_sales',
      name: 'View Sales',
      selector: 'view_sales'
    }
  ]
  saleData: any;


  constructor(private Sale: SaleService, private APIs : APIcallsService) { }

  ngOnInit(): void {

  }
  getSaleData(){
    this.APIs.GETAllSaleBill().subscribe(res => {
      this.saleData = res;
    })
  }
}
