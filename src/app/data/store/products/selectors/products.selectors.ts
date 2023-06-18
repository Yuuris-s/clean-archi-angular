import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ProductsStateInterface} from '../reducers/products-state.interface';

const applicationState = createFeatureSelector<ProductsStateInterface>('products');

export const selectProducts = createSelector(
  applicationState,
  (state: ProductsStateInterface) => state?.availableProducts
);

export const selectAvailableFilters = createSelector(
  applicationState,
  (state: ProductsStateInterface) => state?.availableFilters
);

export const selectSelectedFilters = createSelector(
  applicationState,
  (state: ProductsStateInterface) => state?.selectedFilters
);

export const selectProductsStatus = createSelector(
  applicationState,
  (state: ProductsStateInterface) => state?.status
);

