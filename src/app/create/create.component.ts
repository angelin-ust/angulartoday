import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  product:Product=new Product();
 
  constructor(private productService:ProductService){}
  ngOnInit():void{}
  onSubmit(){
    this.saveProduct();
     console.log(this.product);
  }
  saveProduct(){
    this.productService.saveProduct(this.product).subscribe((data)=>{
      console.log(data);
    },
    
      (error)=>console.log(error)
    );
  }
}
