import {Filter} from '../../../models/filter';
import {Observable} from 'rxjs';

export abstract class IDisplayAvailableFiltersAndSatusPorts {
  abstract execute(): Observable<Filter[]>
}
