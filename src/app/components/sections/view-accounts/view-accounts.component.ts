import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'view-accounts',
  templateUrl: './view-accounts.component.html',
  styleUrls: ['./view-accounts.component.css']
})
export class ViewAccountsComponent implements OnInit {
  @Input() accounts: Array<Account>;
  view_account_cols = ['Party Name', 'Mobile', 'Group', 'Type', 'PAN', 'Address', 'GSTN', 'BEAT','Action'];
  constructor() { }

  ngOnInit(): void {
    console.log(this.accounts);
  }
  delete(i){

  }
  edit(i){
    
  }

}
