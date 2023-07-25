import { Injectable } from "@angular/core";
import { LoggerService } from "./LoggerService";

// Component 
// @Injectable({
//     providedIn:"root"
// })

@Injectable( )
export class ProductService {
  constructor(private loggerService:LoggerService){}
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
