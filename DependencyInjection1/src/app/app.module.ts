import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './productService';
import { LoggerService } from './LoggerService';
import { productServiceToken } from './injection-token';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    // ProductService, => DI Token default olarak Type Token kullanır
    // LoggerService,
    // { provide: ProductService, useClass:ProductService } => Type Token
    // { provide: "productService", useClass: ProductService } => String Token
    { provide: productServiceToken, useClass: ProductService} // => Injection Token
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
