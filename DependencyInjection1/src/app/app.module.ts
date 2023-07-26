import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './productService';
import { LoggerService } from './LoggerService';
import { productServiceToken } from './injection-token';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    // ProductService, => DI Token default olarak Type Token kullanır
    // LoggerService,
    // { provide: ProductService, useClass:ProductService } => Type Token
    // { provide: "productService", useClass: ProductService } => String Token
    { provide: productServiceToken, useClass: ProductService }, // => Injection Token
    { provide: 'example', useValue: 'merhaba' },
    {
      provide: 'example',
      useValue: () => {
        return 'merhaba';
      },
    },
    {
      provide: 'productService',
      useFactory: (httpClient:HttpClient) => {
        const obs = httpClient.get("https://jsonplaceholder.typicode.com/posts").subscribe({ next :data => {
          console.log(data);
        }});
        return new ProductService();
      },
      deps: [HttpClient],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
