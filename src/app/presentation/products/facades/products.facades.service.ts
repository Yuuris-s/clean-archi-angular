import {Observable} from 'rxjs';
import {Filter} from '../../../domain/models/filter';
import {Injectable} from '@angular/core';
import {Product} from '../../../domain/models/product';
import {IDisplayFilteredProductsPorts} from '../../../domain/use-cases/products/ports/iDisplayFilteredProductsPorts';
import {IUpdateSelectedFilterPorts} from '../../../domain/use-cases/products/ports/iUpdateSelectedFilterPorts';
import {
  IDisplayAvailableFiltersAndSatusPorts
} from '../../../domain/use-cases/products/ports/IDisplayAvailableFiltersAndSatusPorts';
import {ProductsStatus} from '../../../data/store/products/reducers/products-state.interface';
import {IManageProductsAndFiltersPort} from '../../../domain/use-cases/products/ports/IManageProductsAndFiltersPort';


@Injectable()
export class ProductsFacadesService {

  constructor(private displayFiltersAndStatusUseCase: IDisplayAvailableFiltersAndSatusPorts,
              private updateSelectedFiltersUseCase: IUpdateSelectedFilterPorts,
              private displayFilteredProductsUseCase: IDisplayFilteredProductsPorts,
              private manageProductsAndFilters: IManageProductsAndFiltersPort) {
  }

  getFiltersAndStatus(): Observable<Filter[]> {
    return this.displayFiltersAndStatusUseCase.execute();
  }

  updateSelectedFilters($event: Filter) {
    this.updateSelectedFiltersUseCase.execute($event);
  }

  getFilteredProducts(): Observable<Product[]> {
    return this.displayFilteredProductsUseCase.execute();
  }

  getProductsStatus(): Observable<ProductsStatus> {
    return this.manageProductsAndFilters.getProductsStatus();
  }
}
