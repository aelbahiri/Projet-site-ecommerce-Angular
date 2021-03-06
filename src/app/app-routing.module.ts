import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductsComponent } from './components/products/products.component';


const routes: Routes = [
       
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },

  { path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
{ path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,)], 

  exports: [RouterModule]
})
export class AppRoutingModule { }
