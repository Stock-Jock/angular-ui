import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockServiceService {

  constructor(private httpClient: HttpClient) {

  }

  getStockItems(): Observable<any> {
    return this.httpClient.get('https://localhost:5001/rest/stockjock/stock');
  }
}
