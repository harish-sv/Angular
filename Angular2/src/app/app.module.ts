import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';
import { AppInventory } from './Inventory.component';
import { AppProduct } from './Product.component';
import { RouterModule , Routes } from '@angular/router';

const appRoutes: Routes = [
   { path: 'Product', component: AppProduct },
   { path: 'Inventory', component: AppInventory },
];

@NgModule({
  imports: [BrowserModule, HttpModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, AppProduct, AppInventory ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
