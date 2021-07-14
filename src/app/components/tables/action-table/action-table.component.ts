import { Component, DoCheck, Input, OnInit } from '@angular/core';

@Component({
  selector: 'action-table',
  templateUrl: './action-table.component.html',
  styleUrls: ['./action-table.component.css']
})
export class ActionTableComponent implements OnInit, DoCheck {
  @Input() col: Array<any>;
  @Input() row : any;

  constructor() { }

  ngDoCheck(){
  }

  ngOnInit(): void {
  }

}
