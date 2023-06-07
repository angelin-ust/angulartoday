import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  product:Product=new Product();
  //router: any;
 
  constructor(private productService:ProductService,
    private router: Router){}
  ngOnInit():void{}
  onSubmit(){
    this.saveProduct();
     console.log(this.product);
  }
  saveProduct(){
    this.productService.saveProduct(this.product).subscribe((data)=>{
      console.log(data);
      this.updateProductList();
    },
    
      (error)=>console.log(error)
    );
  }
  updateProductList(){
    this.router.navigate(['/product']);
  }

}
