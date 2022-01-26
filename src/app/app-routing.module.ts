import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockComponent } from './stock/stock.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SellComponent } from './sell/sell.component';
import { AddItemsComponent } from './add-items/add-items.component';

const routes: Routes = [{
  path:'', redirectTo: '/home' , pathMatch: 'full'
},
{
  path:'home', component: HomepageComponent
},
{
  path:'sell', component: SellComponent
},
{
  path:'stock', component: StockComponent
},
{
  path:'add-items', component: AddItemsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
