import { Injectable } from '@angular/core';
import { Purchase } from '../models/purchase';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PurchaseService {

  constructor(private http: HttpClient) { }

  put(purchase: Purchase): Observable<any> {
    return this.http.put('http://localhost:3000/api/v1/purchase', purchase);
  }

  patch(purchase: Purchase): Observable<any> {
    return this.http.patch('http://localhost:3000/api/v1/purchase', purchase);
  }

  delete(purchaseId: number): Observable<any> {
    return this.http.delete('http://localhost:3000/api/v1/purchase/' + purchaseId);
  }
}
