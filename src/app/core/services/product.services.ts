import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsServices {
  private apiurl = "http://localhost:8080/products/";

  constructor(private httpClient: HttpClient) {
  }

  getListProducts(): Observable<any> {
    return this.httpClient.get(this.apiurl + "getListProductsAll");
  }

  getDatatable(data): Observable<any>{
    return this.httpClient.post(this.apiurl + "getDatatableAllProduct", data)
  }
}
