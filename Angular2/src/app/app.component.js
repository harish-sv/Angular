"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var product_service_1 = require("./product.service");
require("rxjs/add/operator/map");
var AppComponent = (function () {
    function AppComponent(_prodcutService) {
        this._prodcutService = _prodcutService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._prodcutService.getProducts()
            .subscribe(function (iprod) { return _this.iProducts = iprod; });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n   <ul>\n      <li><a [routerLink] = \"['/Product']\">Products</a></li>\n      <li><a [routerLink] = \"['/Inventory']\">Inventory</a></li>\n   </ul>\n    <div *ngFor= 'let a of iProducts'>\n      <ul>\n        <li>{{a.ProductID}}</li>\n        <li>{{a.ProductName}}</li>\n       </ul>\n    </div>\n   <router-outlet></router-outlet>",
        providers: [product_service_1.ProductService]
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map