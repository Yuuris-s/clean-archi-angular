import {IManageProductsAndFiltersPort} from './ports/IManageProductsAndFiltersPort';
import {Injectable} from '@angular/core';
import {IInitAvailableProductsAndFiltersPorts} from './ports/IInitAvailableProductsAndFiltersPorts';

@Injectable({providedIn: 'root'})
export class InitAvailableProductsAndFiltersUseCase implements IInitAvailableProductsAndFiltersPorts{
  constructor(private manageProductsAndFilters: IManageProductsAndFiltersPort) {
  }

  execute(): void {
    this.manageProductsAndFilters.initAvailableProductsAndFilters();
  }
}
