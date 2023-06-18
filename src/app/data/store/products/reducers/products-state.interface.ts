import {Product} from '../../../../domain/models/product';
import {Filter} from '../../../../domain/models/filter';
import {ProductTypeEnum} from '../../../../domain/models/product-type.enum';


export type ProductsStatus = 'PENDING' | 'LOADED'

export interface ProductsStateInterface {
  availableProducts: Product[],
  availableFilters: ProductTypeEnum[],
  selectedFilters: ProductTypeEnum[]
  status: ProductsStatus

}
