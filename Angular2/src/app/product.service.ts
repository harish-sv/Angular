import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { IProduct } from './product';

@Injectable()

export class ProductService {
    private _producturl = 'app/products.json';

    constructor(private _http: Http){}

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._producturl)
        .map( (res: Response) => <IProduct[]> res.json())
        .do(result => console.log(JSON.stringify(result)));
    }
}
