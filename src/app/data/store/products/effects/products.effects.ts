import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {MockProductApiService} from '../../../repository/api/mock-product-api.service';
import {map, switchMap} from 'rxjs';
import {Store} from '@ngrx/store';
import {productsActions} from '../actions/products.actions';

@Injectable()
export class ProductsEffects {
  constructor(private actions$: Actions,
              private productsApiService: MockProductApiService,
              private store: Store) {
  }

  initApplicationState$ = createEffect(() => this.actions$.pipe(
    ofType(productsActions.initProductsAndFilters),
    switchMap(() => {
      return this.productsApiService.getAvailableProductsAndFilters();
    }),
    map(({products, filters}) => {
          return productsActions.initProductsAndFiltersSucess({products, filters});
        }
    )
  ));
}
