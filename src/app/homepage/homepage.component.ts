import { Component  } from '@angular/core';
import { catchError, EMPTY } from 'rxjs';
import { ProductService } from '../services/product.service';
import { Product } from './Product.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  errorMessage = '';
  productData$ = this.productService.productData$.pipe(
    catchError(err =>{
      this.errorMessage = err;
      return EMPTY;
    })
  );

  constructor(private productService: ProductService) {}
}
