import {Component, Input} from '@angular/core';
import {Product} from '../../../../domain/models/product';

@Component({
             selector:    'app-filtered-products',
             templateUrl: './products-list.html',
             styleUrls:   ['./products-list.scss']
           })
export class ProductsList {

  @Input() products: Product[];

  constructor() {
  }

}
