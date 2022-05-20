import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {AppComponent} from "./app.component";

import {AboutPageComponent} from "./about-page/about-page.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {ProductPageComponent} from "./product-page/product-page.component";
import {ProductsPageComponent} from "./products-page/products-page.component";
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {ProductListingComponent} from "./product-listing/product-listing.component";
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    HomePageComponent,
    ProductPageComponent,
    ProductsPageComponent,
    NavBarComponent,
    ProductListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
