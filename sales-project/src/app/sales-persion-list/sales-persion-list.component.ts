import { Component, OnInit } from '@angular/core';
import { SalesPersion } from './sales-persion';

@Component({
  selector: 'app-sales-persion-list',
  templateUrl: './sales-persion-list.component.html',
  styleUrls: ['./sales-persion-list.component.css']
})
export class SalesPersionListComponent implements OnInit {

  salesPersionList: SalesPersion[] = [
    new SalesPersion("Makhsodur","Rahman","makhsour@gmail.com",3000),
    new SalesPersion("sakil","Rahman","salil@gmail.com",2300),
    new SalesPersion("Nafiz","Rahman","nafiz@gmail.com",3000),
    new SalesPersion("adil","Rahman","adil@gmail.com",3000)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
