import {Injectable} from '@angular/core';
import {combineLatestWith, filter, map, Observable} from 'rxjs';
import {Filter} from '../../models/filter';
import {ProductTypeEnum} from '../../models/product-type.enum';
import {IManageProductsAndFiltersPort} from './ports/IManageProductsAndFiltersPort';
import {IDisplayAvailableFiltersAndSatusPorts} from './ports/IDisplayAvailableFiltersAndSatusPorts';

@Injectable({providedIn:'root'}
)
export class DisplayAvailableFiltersAndStatusUseCase implements IDisplayAvailableFiltersAndSatusPorts{

  constructor(private manageProductsAndFilters: IManageProductsAndFiltersPort) {
  }

  execute(): Observable<Filter[]> {
    return this.manageProductsAndFilters.getAvailableFilters()
               .pipe(
                 combineLatestWith(this.manageProductsAndFilters.getSelectedFilters()),
                 filter(([availableFilters, selectedFilters]) => {
                   return !!availableFilters;
                 }),
                 map(([availableFilters, selectedFilters]: [ProductTypeEnum[], ProductTypeEnum[]]) => {
                   return this.buildFiltersWithSelectedStatus(availableFilters, selectedFilters);
                 })
               );
  }

  private buildFiltersWithSelectedStatus(availableFilters: ProductTypeEnum[],
                                         selectedFilters: ProductTypeEnum[]): Filter[] {
    return availableFilters.map((filter) => {
      return {
        type:     filter,
        selected: selectedFilters.includes(filter)
      };
    });

  }
}
