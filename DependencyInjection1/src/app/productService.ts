import { Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})

export class ProductService {
  getProducts(): Product[] {
    return [
      { name: 'Keyboard', quantity: 20 },
      { name: 'Mouse', quantity: 2 },
      { name: 'Screen', quantity: 15 },
    ];
  }
}

export class Product {
  name: string;
  quantity: number;
}
