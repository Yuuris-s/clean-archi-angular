import {ProductTypeEnum} from './product-type.enum';

export class Filter {
  type!: ProductTypeEnum;
  selected!: boolean;
}
