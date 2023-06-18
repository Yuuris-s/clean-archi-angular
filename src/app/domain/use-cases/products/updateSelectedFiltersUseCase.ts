import {Injectable} from '@angular/core';
import {ProductTypeEnum} from '../../models/product-type.enum';
import {Filter} from '../../models/filter';
import {IManageProductsAndFiltersPort} from './ports/IManageProductsAndFiltersPort';
import {IUpdateSelectedFilterPorts} from './ports/iUpdateSelectedFilterPorts';

@Injectable({providedIn: 'root'})
export class UpdateSelectedFiltersUseCase implements IUpdateSelectedFilterPorts {

  constructor(private manageProductsAndFilters: IManageProductsAndFiltersPort) {
  }

  execute(updatedFilter: Filter): void {
    this.manageProductsAndFilters.updateSelectedFilter(updatedFilter);
  }

  static updateSelectedFilters(selectedFilters: ProductTypeEnum[], updatedFilter: Filter): ProductTypeEnum[] {
    let newSelectedFilters;
    if (updatedFilter.selected) {
      newSelectedFilters = [...selectedFilters, updatedFilter.type];
    } else {
      newSelectedFilters = selectedFilters.filter((f: ProductTypeEnum) => f !== updatedFilter.type);
    }
    return newSelectedFilters;
  }
}
