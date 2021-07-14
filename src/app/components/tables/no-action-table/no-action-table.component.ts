import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'no-action-table',
  templateUrl: './no-action-table.component.html',
  styleUrls: ['./no-action-table.component.css']
})
export class NoActionTableComponent implements OnInit {
  @Input() col: Array<any>;
  @Input() row : any;

  constructor() { }

  ngOnInit(): void {
  }

}
