import { Component, OnInit } from '@angular/core';

import { StockServiceService } from '../services/stock-service/stock-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(stockService: StockServiceService) { }

  ngOnInit(): void {
  }

}
