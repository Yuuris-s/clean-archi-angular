import {Injectable} from '@angular/core';
import {IManageProductsAndFiltersPort} from '../../../domain/use-cases/products/ports/IManageProductsAndFiltersPort';
import {Product} from '../../../domain/models/product';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {
  selectAvailableFilters,
  selectProducts, selectProductsStatus,
  selectSelectedFilters
} from '../../store/products/selectors/products.selectors';
import {ProductTypeEnum} from '../../../domain/models/product-type.enum';
import {Filter} from '../../../domain/models/filter';
import {productsActions} from '../../store/products/actions/products.actions';
import {ProductsStatus} from '../../store/products/reducers/products-state.interface';

@Injectable()
export class ManageProductsAdapterService implements IManageProductsAndFiltersPort {
  constructor(private store: Store) {
  }

  initAvailableProductsAndFilters(): void {
    this.store.dispatch(productsActions.initProductsAndFilters());
  }

  getAllProducts(): Observable<Product[]> {
    return this.store.select(selectProducts);
  }

  getAvailableFilters(): Observable<ProductTypeEnum[]> {
    return this.store.select(selectAvailableFilters);
  }

  getSelectedFilters(): Observable<ProductTypeEnum[]> {
    return this.store.select(selectSelectedFilters);
  }

  updateSelectedFilter(updatedFilter: Filter): void {
    this.store.dispatch(productsActions.updateSelectedFiltersSuccess({updatedFilter}));
  }

  getProductsStatus(): Observable<ProductsStatus> {
    return this.store.select(selectProductsStatus);
  }

}
