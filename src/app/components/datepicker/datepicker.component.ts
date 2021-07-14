import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
  bsValue = new Date();
  constructor() {

  }

  getValue(val) {
    var date = val;
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    var dateString =
    (d <= 9 ? "0" + d : d) + "-" + (m <= 9 ? "0" + m : m) + "-" + y;
    
  }
  ngOnInit(): void {
  }


}
