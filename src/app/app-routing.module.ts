import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterProductComponent } from './register-product/register-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LandingComponent } from './landing/landing.component';
import { MappageComponent } from './mappage/mappage.component';


const routes: Routes = [
  { path: 'register', component: RegisterProductComponent },
  { path: 'mappage', component: MappageComponent },
  { path: '', component: LandingComponent },
  {
    path: 'detail/:id', 
    component: ProductDetailsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
