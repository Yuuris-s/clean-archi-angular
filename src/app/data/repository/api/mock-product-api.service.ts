import {Injectable} from '@angular/core';
import {Product} from '../../../domain/models/product';
import {ProductTypeEnum} from '../../../domain/models/product-type.enum';
import {delay, Observable, of} from 'rxjs';

@Injectable({
              providedIn: 'root'
            })
export class MockProductApiService {

  constructor() {
  }

  getAvailableProductsAndFilters(): Observable<{ products: Product[], filters: ProductTypeEnum[] }> {
    return of({
                products: [
                  {
                    name:    'Cat Food by Larry',
                    type:    ProductTypeEnum.CAT_FOOD,
                    country: 'China',
                    price:   10.99
                  },
                  {
                    name:    'Alfie Chow',
                    type:    ProductTypeEnum.CAT_FOOD,
                    country: 'USA',
                    price:   16.99
                  },
                  {
                    name:    'For Cats',
                    type:    ProductTypeEnum.CAT_FOOD,
                    country: 'USA',
                    price:   15.99
                  },
                  {
                    name:    'Dog Food by Larry',
                    type:    ProductTypeEnum.DOG_FOOD,
                    country: 'USA',
                    price:   10.99
                  },
                  {
                    name:    'YUMY',
                    type:    ProductTypeEnum.DOG_FOOD,
                    country: 'China',
                    price:   10.99
                  },
                  {
                    name:    'DEAD MOUSE',
                    type:    ProductTypeEnum.CAT_TOY,
                    country: 'EU',
                    price:   10.99
                  },
                  {
                    name:    'Flowers',
                    type:    ProductTypeEnum.BIRD_FOOD,
                    country: 'China',
                    price:   10.99
                  },

                  {
                    name:    'NOT DOG FOOD',
                    type:    ProductTypeEnum.PEOPLE_FOOD,
                    country: 'Canada',
                    price:   10.99
                  },
                  {
                    name:    'Polly',
                    type:    ProductTypeEnum.BIRD_FOOD,
                    country: 'China',
                    price:   10.99
                  },
                  {
                    name:    'Super',
                    type:    ProductTypeEnum.BIRD_FOOD,
                    country: 'Brazil',
                    price:   10.99
                  }
                ],
                filters:  [ProductTypeEnum.BIRD_FOOD,
                           ProductTypeEnum.CAT_FOOD,
                           ProductTypeEnum.CAT_TOY,
                           ProductTypeEnum.DOG_TOY,
                           ProductTypeEnum.PEOPLE_FOOD,
                           ProductTypeEnum.DOG_FOOD]
              }).pipe(delay(3000));
  }

}
