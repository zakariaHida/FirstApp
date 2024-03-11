// item.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private baseUrl = 'http://localhost:9090';

  constructor(private http: HttpClient) { }

  getItems(): Observable<any> {
    return this.http.get(`${this.baseUrl}/items`);
  }

  addItem(name: string, description: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, { name, description });
  }

  updateItem(item_id: number, name: string, description: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/items/${item_id}`, { name, description });
  }
}
