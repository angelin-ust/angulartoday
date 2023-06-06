import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  products: Product[]=[];
  constructor(private productService:ProductService,private router: Router){}
  ngOnInit(): void {
    this.getProductall();
  }
  private getProductall(){
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
  updateProducted(id:number){
    this.router.navigate(['update', id]);
  }
  deleteProducted(id: number){
    this.productService.deleteProduct(id).subscribe( data => {
      console.log(data);
      this.getProductall();
    })
  }
  }



 
  




