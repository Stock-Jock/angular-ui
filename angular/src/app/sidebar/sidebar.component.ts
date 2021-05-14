import { Stock } from './../models/stock';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StockServiceService } from '../services/stock-service/stock-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  stockList: Stock[];

  constructor(private stockService: StockServiceService, private router: Router) { 
    this.stockList = [];
  }

  ngOnInit(): void {
    this.router.events.subscribe();
    this.getStockList();
  }

  getStockList(): any {
    this.stockService.getStockItems().subscribe((res) => {
      this.stockList = res;
      console.log(this.stockList);
    })
  }

}
