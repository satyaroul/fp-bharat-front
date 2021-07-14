import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  purchaseData:any;
  constructor() { }

  ngOnInit(): void {
  }

}
