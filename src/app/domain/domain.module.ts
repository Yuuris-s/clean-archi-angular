import {NgModule} from '@angular/core';
import {IManageProductsAndFiltersPort} from './use-cases/products/ports/IManageProductsAndFiltersPort';
import {ManageProductsAdapterService} from '../data/repository/adapters/manage-products-adapter.service';


@NgModule({
            declarations: [],
            imports:      [],
            providers:    [
              {provide: IManageProductsAndFiltersPort, useClass: ManageProductsAdapterService}]
          })
export class DomainModule {
}
