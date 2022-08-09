import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SalesPersionListComponent } from './sales-persion-list/sales-persion-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SalesPersionListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
