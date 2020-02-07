import { Component } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
// import { appService } from './app.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-app',
   template: `
   <ul>
      <li><a [routerLink] = "['/Product']">Products</a></li>
      <li><a [routerLink] = "['/Inventory']">Inventory</a></li>
   </ul>
    <div *ngFor= 'let a of iProducts'>
      <ul>
        <li>{{a.ProductID}}</li>
        <li>{{a.ProductName}}</li>
       </ul>
    </div>
   <router-outlet></router-outlet>`,
   providers: [ProductService]
})

export class AppComponent {
   iProducts: IProduct[];
   constructor(private _prodcutService: ProductService) {}

   ngOnInit() : void {
     this._prodcutService.getProducts()
     .subscribe(iprod => this.iProducts = iprod);
   }
}
