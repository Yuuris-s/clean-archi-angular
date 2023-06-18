import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsRoutingModule} from './products-routing.module';
import {ProductsContainerComponent} from './products-container.component';
import {ProductsList} from './components/products-list/products-list';
import {IDisplayFilteredProductsPorts} from '../../domain/use-cases/products/ports/iDisplayFilteredProductsPorts';
import {DisplayFilteredProductsUseCase} from '../../domain/use-cases/products/displayFilteredProductsUseCase';
import {
  IDisplayAvailableFiltersAndSatusPorts
} from '../../domain/use-cases/products/ports/IDisplayAvailableFiltersAndSatusPorts';
import {
  DisplayAvailableFiltersAndStatusUseCase
} from '../../domain/use-cases/products/displayAvailableFiltersAndStatusUseCase';
import {IUpdateSelectedFilterPorts} from '../../domain/use-cases/products/ports/iUpdateSelectedFilterPorts';
import {UpdateSelectedFiltersUseCase} from '../../domain/use-cases/products/updateSelectedFiltersUseCase';
import {ProductsFacadesService} from './facades/products.facades.service';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FiltersListComponent} from './components/filters-list/filters-list.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
            declarations: [
              ProductsContainerComponent,
              ProductsList,
              FiltersListComponent
            ],
            imports: [
              CommonModule,
              ProductsRoutingModule,
              MatCheckboxModule,
              MatProgressSpinnerModule,
            ],
            providers:    [ProductsFacadesService,
                           {
                             provide: IDisplayFilteredProductsPorts, useClass: DisplayFilteredProductsUseCase
                           },
                           {
                             provide:  IDisplayAvailableFiltersAndSatusPorts,
                             useClass: DisplayAvailableFiltersAndStatusUseCase
                           },
                           {
                             provide: IUpdateSelectedFilterPorts, useClass: UpdateSelectedFiltersUseCase
                           },]
          })
export class ProductsModule {
}
