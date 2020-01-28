import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { SliderComponent } from './components/common/slider/slider.component';
import { BodyComponent } from './components/common/body/body.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductsComponent } from './components/products/products.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    BodyComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
