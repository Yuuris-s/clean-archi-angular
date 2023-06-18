import {Injectable} from '@angular/core';
import {Product} from '../../models/product';
import {combineLatestWith, map, Observable} from 'rxjs';
import {IManageProductsAndFiltersPort} from './ports/IManageProductsAndFiltersPort';
import {ProductTypeEnum} from '../../models/product-type.enum';
import {IDisplayFilteredProductsPorts} from './ports/iDisplayFilteredProductsPorts';

@Injectable({providedIn:'root'})
export class DisplayFilteredProductsUseCase implements IDisplayFilteredProductsPorts{

  constructor(private manageProductsAndFilters: IManageProductsAndFiltersPort) {
  }

  execute(): Observable<Product[]> {
    return this.manageProductsAndFilters.getAllProducts()
               .pipe(
                 combineLatestWith(this.manageProductsAndFilters.getSelectedFilters()),
                 map(([products, selectedFilters]: [Product[], ProductTypeEnum[]]) => {
                   return this.displayFilteredProducts(products, selectedFilters);
                 })
               );


  }

  private displayFilteredProducts(products: Product[], selectedFilters: ProductTypeEnum[]): Product[] {
    let filteredProducts = products;
    if (selectedFilters.length) {
      filteredProducts = products.filter((product: Product) => selectedFilters.includes(product.type));
    }
    return filteredProducts;
  }
}
