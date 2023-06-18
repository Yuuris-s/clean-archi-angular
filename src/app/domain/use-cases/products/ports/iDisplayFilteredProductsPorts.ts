import {Observable} from 'rxjs';
import {Product} from '../../../models/product';

export abstract class IDisplayFilteredProductsPorts {
  abstract execute(): Observable<Product[]>
}
