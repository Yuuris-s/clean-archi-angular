import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Filter} from '../../../../domain/models/filter';

@Component({
             selector:    'app-filter-list',
             templateUrl: './filters-list.component.html',
             styleUrls:   ['./filters-list.component.scss']
           })
export class FiltersListComponent {
  @Input() filters: Filter[];
  @Output() updateFilterStatus: EventEmitter<Filter>;

  constructor() {
    this.updateFilterStatus = new EventEmitter<Filter>();
  }

  updateStatus(filter: Filter) {
    this.updateFilterStatus.emit({...filter, selected: !filter.selected});
  }
}
