import {ProductTypeEnum} from './product-type.enum';


export class Product {
  name!: string;
  type!: ProductTypeEnum;
  country!: string;
  price!: number;

  constructor() {
  }
}
