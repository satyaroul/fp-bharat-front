import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Account } from 'src/app/modals/account';
import { APIcallsService } from 'src/app/service/apicalls.service';
import { MasterOperationsService } from 'src/app/service/master-operations.service';

@Component({
  selector: 'add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {
  accountDetails: Account;

  constructor(private API : APIcallsService, private MasterOps : MasterOperationsService) { }

  ngOnInit(): void {
    console.log('here2');
  }
  onSubmit(form: NgForm){
    this.accountDetails = new Account(
      form.value.DATA.account_group, form.value.DATA.account_name, form.value.DATA.account_type, form.value.DATA.address,
      form.value.DATA.beat_area, form.value.DATA.gstn, form.value.DATA.mobile_no, form.value.DATA.pan
    )
    console.log(this.accountDetails);
    this.MasterOps.SaveNewAccount(this.accountDetails);
    form.reset();
  }

}
