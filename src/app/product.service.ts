import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get<Product[]>("http://localhost:8090/product/api.2.0/retrieve/all")
  }

  saveProduct(product:Product):Observable<Object>{
    return this.http.post("http://localhost:8090/product/api.2.0/create",product);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`http://localhost:8090/product/api.2.0/retrieve/${id}`);
  }

  updateProduct(id:number,product: Product): Observable<Object> {
    return this.http.put(`http://localhost:8090/product/api.2.0/update/${id}`, product);
  }

  saveUpdate(product:Product):Observable<Object>{
    return this.http.post("http://localhost:8090/product/api.2.0/create",product);
  }
  deleteProduct(id: number):Observable<Product>{
    return this.http.get<Product>(`http://localhost:8090/product/api.2.0/delete/${id}`);
  }
}
