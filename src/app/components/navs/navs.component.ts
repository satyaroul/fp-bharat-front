import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navs',
  templateUrl: './navs.component.html',
  styleUrls: ['./navs.component.css']
})
export class NavsComponent implements OnInit {
@Input() navs : Array<any>;
  constructor() { }

  ngOnInit(): void {
  }

}
