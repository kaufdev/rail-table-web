import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModuleModule} from './material-module/material-module.module';
import {SearchPanelComponent} from './search-panel/search-panel.component';
import {FormsModule} from '@angular/forms';
import {TransferListComponent} from './transfer-list/transfer-list.component';
import {TransferComponent} from './transfer/transfer.component';
import {StationFormComponent} from './station-from-input/station-form-input.component';
import {InterchangeTransferComponent} from './interchange-transfer/interchange-transfer.component';
import {OrderTicketComponent} from "./order/order-ticket.component";
import {SectionRow} from "./section-row/section-row.component";
import {TicketComponent} from "./ticket/ticket.component";
import {SearchScreenComponent} from "./search-screen/search-screen.component";
import {RoutingModule} from "./routing.module";
import {AlertListComponent} from "./alert/alert-list.component";
import {AlertComponent} from "./alert/alert.component";
import {CheckTicketComponent} from "./check-ticket/check-ticket.component";

@NgModule({
  declarations: [
    AppComponent,
    SearchPanelComponent,
    TransferListComponent,
    TransferComponent,
    StationFormComponent,
    InterchangeTransferComponent,
    OrderTicketComponent,
    TicketComponent,
    SectionRow,
    SearchScreenComponent,
    AlertListComponent,
    AlertComponent,
    CheckTicketComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    FormsModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
