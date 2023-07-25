import { Component, Inject } from '@angular/core';
import { ProductService } from './productService';
import { productServiceToken } from './injection-token';

@Component({
  selector: 'app-root',
  template:`
  
  `
})
export class AppComponent {
  title = 'DependencyInjection1';

  // Type Token Kullanımı
  // constructor(private productService: ProductService) {
  //   console.log(productService.getProducts());
  // }

  // String Token Kullanımı
  // constructor(@Inject("productService") private productService: ProductService) {
  //   console.log(productService.getProducts());
  // }

  // Injection Token Kullanımı
  constructor(@Inject(productServiceToken) private productService: ProductService) {
    console.log(productService.getProducts());
  }
}
