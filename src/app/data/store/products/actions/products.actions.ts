import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {ProductTypeEnum} from '../../../../domain/models/product-type.enum';
import {Filter} from '../../../../domain/models/filter';
import {Product} from '../../../../domain/models/product';

export const productsActions = createActionGroup({
                                                   source: 'Products',
                                                   events: {
                                                     initProductsAndFilters:       emptyProps,
                                                     initProductsAndFiltersSucess: props<{ products: Product[], filters: ProductTypeEnum[] }>(),
                                                     updateSelectedFiltersSuccess: props<{ updatedFilter: Filter }>(),
                                                   }
                                                 });
