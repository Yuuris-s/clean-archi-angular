import {Observable} from 'rxjs';
import {Product} from '../../../models/product';
import {ProductTypeEnum} from '../../../models/product-type.enum';
import {Filter} from '../../../models/filter';
import {ProductsStatus} from '../../../../data/store/products/reducers/products-state.interface';

export abstract class IManageProductsAndFiltersPort {

  abstract getAllProducts(): Observable<Product[]>

  abstract getAvailableFilters(): Observable<ProductTypeEnum[]>

  abstract getSelectedFilters(): Observable<ProductTypeEnum[]>

  abstract updateSelectedFilter(updatedFilter: Filter): void

  abstract initAvailableProductsAndFilters(): void

  abstract getProductsStatus(): Observable<ProductsStatus>
}
