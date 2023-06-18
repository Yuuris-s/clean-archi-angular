import {Component} from '@angular/core';
import {ProductsFacadesService} from './facades/products.facades.service';
import {Observable} from 'rxjs';
import {Filter} from '../../domain/models/filter';
import {Product} from '../../domain/models/product';
import {ProductsStatus} from '../../data/store/products/reducers/products-state.interface';

@Component({
             selector:    'app-products-container',
             templateUrl: './products-container.component.html',
             styleUrls:   ['./products-container.component.scss']
           })
export class ProductsContainerComponent {
  filters$: Observable<Filter[]>;
  filteredProducts$: Observable<Product[]>;
  productsStatus$: Observable<ProductsStatus>;

  constructor(private productsFacade: ProductsFacadesService) {
  }

  ngOnInit() {
    this.filters$          = this.productsFacade.getFiltersAndStatus();
    this.filteredProducts$ = this.productsFacade.getFilteredProducts();
    this.productsStatus$   = this.productsFacade.getProductsStatus();
  }

  updateFilterStatus($event: Filter) {
    this.productsFacade.updateSelectedFilters($event);
  }
}
