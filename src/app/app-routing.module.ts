import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { AccountHeadComponent } from './page/account-head/account-head.component';
import { AreaListComponent } from './page/area-list/area-list.component';
import { BankEntryComponent } from './page/bank-entry/bank-entry.component';
import { CashEntryComponent } from './page/cash-entry/cash-entry.component';
import { ItemHeadComponent } from './page/item-head/item-head.component';
import { ManufacturerListComponent } from './page/manufacturer-list/manufacturer-list.component';
import { PurchaseComponent } from './page/purchase/purchase.component';
import { SaleComponent } from './page/sale/sale.component';


const routes: Routes = [
  {path: 'account_head' , component: AccountHeadComponent},
  {path: 'item_head' , component: ItemHeadComponent},
  {path: 'area_list' , component: AreaListComponent},
  {path: 'mfg_list' , component: ManufacturerListComponent},
  {path: 'sales' , component: SaleComponent},
  {path: 'purchase' , component: PurchaseComponent},
  {path: 'cash_entry' , component: CashEntryComponent},
  {path: 'bank_entry' , component: BankEntryComponent},
  {path: 'refresh' , component: SpinnerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
