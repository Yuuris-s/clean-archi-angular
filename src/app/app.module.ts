import {APP_INITIALIZER, isDevMode, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {Store, StoreModule} from '@ngrx/store';
import * as ProductsState from './data/store/products/reducers/products.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {ProductsEffects} from './data/store/products/effects/products.effects';
import {ProductsStateInterface} from './data/store/products/reducers/products-state.interface';
import {DomainModule} from './domain/domain.module';
import {productsActions} from './data/store/products/actions/products.actions';
import {ManageProductsAdapterService} from './data/repository/adapters/manage-products-adapter.service';
import {IManageProductsAndFiltersPort} from './domain/use-cases/products/ports/IManageProductsAndFiltersPort';
import {
  InitAvailableProductsAndFiltersUseCase
} from './domain/use-cases/products/initAvailableProductsAndFiltersUseCase';
import {
  IInitAvailableProductsAndFiltersPorts
} from './domain/use-cases/products/ports/IInitAvailableProductsAndFiltersPorts';

@NgModule({
            declarations: [
              AppComponent
            ],
            imports:      [
              BrowserModule,
              AppRoutingModule,
              StoreModule.forRoot({products: ProductsState.reducer}),
              StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
              EffectsModule.forRoot([ProductsEffects]),
              DomainModule
            ],
            providers:    [{
              provide:    APP_INITIALIZER,
              useFactory: (init: IInitAvailableProductsAndFiltersPorts) => {
                return () => {
                 init.execute();
                };
              },
              multi:      true,
              deps:       [InitAvailableProductsAndFiltersUseCase]
            },
            ],
            bootstrap:    [AppComponent],
          })
export class AppModule {
}
