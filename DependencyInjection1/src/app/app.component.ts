import { Component } from '@angular/core';
import { ProductService } from './productService';

@Component({
  selector: 'app-root',
  template:`
  
  `
})
export class AppComponent {
  title = 'DependencyInjection1';
  constructor(private productService: ProductService) {
    console.log(productService.getProducts());
  }
}
