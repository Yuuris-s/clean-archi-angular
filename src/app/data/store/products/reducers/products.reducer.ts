import {ProductsStateInterface, ProductsStatus} from './products-state.interface';
import {Action, createReducer, on} from '@ngrx/store';
import {ProductTypeEnum} from '../../../../domain/models/product-type.enum';
import {productsActions} from '../actions/products.actions';
import {UpdateSelectedFiltersUseCase} from '../../../../domain/use-cases/products/updateSelectedFiltersUseCase';

export const initialProductsState: ProductsStateInterface =
               {
                 availableProducts: undefined,
                 availableFilters:  undefined,
                 selectedFilters:   [],
                 status:            'PENDING'
               };


const productsReducer = createReducer(
  initialProductsState,
  on(productsActions.initProductsAndFiltersSucess,
     (state, {products, filters}) => ({
       ...state,
       availableFilters:  filters,
       availableProducts: products,
       status:            'LOADED' as ProductsStatus
     })),
  on(productsActions.updateSelectedFiltersSuccess, (state, {updatedFilter}) => {
       const newSelectedFilters = UpdateSelectedFiltersUseCase.updateSelectedFilters(state.selectedFilters, updatedFilter);
       return {...state, selectedFilters: newSelectedFilters};
     }
  ),
);

export function reducer(state: ProductsStateInterface | undefined, action: Action) {
  return productsReducer(state, action);
}
