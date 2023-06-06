import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  productId: number = 0;
  product: any;

  constructor(private productService: ProductService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id'];
    this.productService.getProductById(this.productId).subscribe(
      (product) => {
        this.product = product;
      },
      (error) => {
        console.log('Error retrieving product:', error);
      }
    );
  }

  onSubmit(){
    this.productService.saveUpdate( this.product).subscribe( data =>{
      this.goToProductList();
    }
    , error => console.log(error));
  }

  goToProductList(){
    this.router.navigate(['/product']);
  }

  
}
