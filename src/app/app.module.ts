import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AlertModule } from 'ngx-bootstrap/alert';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { ItemListComponent } from './components/tables/item-list/item-list.component';
import { ActionTableComponent } from './components/tables/action-table/action-table.component';
import { NoActionTableComponent } from './components/tables/no-action-table/no-action-table.component';
import { AccountHeadComponent } from './page/account-head/account-head.component';
import { ModalComponent } from './components/modal/modal.component';
import { AddAccountComponent } from './components/forms/add-account/add-account.component';
import { AddItemComponent } from './components/forms/add-item/add-item.component';
import { AddAreaComponent } from './components/forms/add-area/add-area.component';
import { AddManufacturerComponent } from './components/forms/add-manufacturer/add-manufacturer.component';
import { ItemHeadComponent } from './page/item-head/item-head.component';
import { SaleComponent } from './page/sale/sale.component';
import { PurchaseComponent } from './page/purchase/purchase.component';
import { CashEntryComponent } from './page/cash-entry/cash-entry.component';
import { BankEntryComponent } from './page/bank-entry/bank-entry.component';
import { AreaListComponent } from './page/area-list/area-list.component';
import { ManufacturerListComponent } from './page/manufacturer-list/manufacturer-list.component';
import { SalesComponent } from './components/forms/sales/sales.component';
import { SaleItemComponent } from './components/forms/sale-item/sale-item.component';
import { SaleAccountComponent } from './components/forms/sale-account/sale-account.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { NavsComponent } from './components/navs/navs.component';
import { SaleEntryComponent } from './components/sections/sale-entry/sale-entry.component';
import { ViewSalesComponent } from './components/sections/view-sales/view-sales.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ProductEntryComponent } from './components/sections/product-entry/product-entry.component';
import { ViewProductComponent } from './components/sections/view-product/view-product.component';
import { PartyEntryComponent } from './components/sections/party-entry/party-entry.component';
import { ViewAccountsComponent } from './components/sections/view-accounts/view-accounts.component';
import { PurchaseEntryComponent } from './components/sections/purchase-entry/purchase-entry.component';
import { ViewPurchaseComponent } from './components/sections/view-purchase/view-purchase.component';
import { PurchaseItemsComponent } from './components/forms/purchase-items/purchase-items.component';
import { PurchaseAccountComponent } from './components/forms/purchase-account/purchase-account.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    CardComponent,
    ItemListComponent,
    ActionTableComponent,
    NoActionTableComponent,
    AccountHeadComponent,
    ModalComponent,
    AddAccountComponent,
    AddItemComponent,
    AddAreaComponent,
    AddManufacturerComponent,
    ItemHeadComponent,
    SaleComponent,
    PurchaseComponent,
    CashEntryComponent,
    BankEntryComponent,
    AreaListComponent,
    ManufacturerListComponent,
    SalesComponent,
    SaleItemComponent,
    SaleAccountComponent,
    DatepickerComponent,
    NavsComponent,
    SaleEntryComponent,
    ViewSalesComponent,
    SpinnerComponent,
    ProductEntryComponent,
    ViewProductComponent,
    PartyEntryComponent,
    ViewAccountsComponent,
    PurchaseEntryComponent,
    ViewPurchaseComponent,
    PurchaseItemsComponent,
    PurchaseAccountComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
