import {Filter} from '../../../models/filter';

export abstract class IUpdateSelectedFilterPorts {
  abstract execute(filter: Filter): void
}
