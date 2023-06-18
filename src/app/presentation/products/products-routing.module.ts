import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsContainerComponent} from './products-container.component';

const routes: Routes = [{
  path:      '',
  component: ProductsContainerComponent
}];

@NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
          })
export class ProductsRoutingModule {
}
