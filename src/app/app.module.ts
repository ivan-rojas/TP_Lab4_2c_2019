import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFireAuth } from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainSocioComponent } from './components/socio/views/main-socio/main-socio.component';
import { HomeSocioComponent } from './components/socio/views/home-socio/home-socio.component';
import { MainMozoComponent } from './components/mozo/views/main-mozo/main-mozo.component';
import { HomeMozoComponent } from './components/mozo/views/home-mozo/home-mozo.component';
import { LoginComponent } from './components/all/views/login/login.component';
import { RegisterComponent } from './components/all/views/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainGeneralComponent } from './components/all/views/main-general/main-general.component';
import { FirebaseConfig } from 'src/environments/environment';
import { ErrorComponent } from './components/all/views/error/error.component';
import { HomeClienteComponent } from './components/cliente/views/home-cliente/home-cliente.component';
import { MainClienteComponent } from './components/cliente/views/main-cliente/main-cliente.component';
import { FoodCardComponent } from './components/all/main/food-card/food-card.component';
import { SidebarOptionComponent } from './components/all/main/sidebar-option/sidebar-option.component';
import { OrderListComponent } from './components/all/main/order-list/order-list.component';
import { SelectOrderComponent } from './components/mozo/main/select-order/select-order.component';
import { ManageTablesComponent } from './components/mozo/views/manage-tables/manage-tables.component';
import { TableCardComponent } from './components/mozo/main/table-card/table-card.component';
import { MainCocineroComponent } from './components/cocinero/views/main-cocinero/main-cocinero.component';
import { HomeCocineroComponent } from './components/cocinero/views/home-cocinero/home-cocinero.component';
import { HomeBartenderComponent } from './components/bartender/views/home-bartender/home-bartender.component';
import { MainBartenderComponent } from './components/bartender/views/main-bartender/main-bartender.component';
import { MainCerveceroComponent } from './components/cervecero/views/main-cervecero/main-cervecero.component';
import { HomeCerveceroComponent } from './components/cervecero/views/home-cervecero/home-cervecero.component';
import { WorkOrderComponent } from './components/all/main/work-order/work-order.component';
import { TimeleftPipe } from './pipes/timeleft.pipe';
import { TablePipe } from './pipes/table.pipe';
import { SearchOrderComponent } from './components/cliente/views/search-order/search-order.component';
import { SpinnerComponent } from './components/all/main/spinner/spinner.component';
import { RedirectComponent } from './components/all/views/redirect/redirect.component';
import { ManageTablesAdminComponent } from './components/socio/views/manage-tables-admin/manage-tables-admin.component';
import { ManageOrdersAdminComponent } from './components/socio/views/manage-orders-admin/manage-orders-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    MainSocioComponent,
    HomeSocioComponent,
    MainMozoComponent,
    HomeMozoComponent,
    LoginComponent,
    RegisterComponent,
    MainGeneralComponent,
    ErrorComponent,
    HomeClienteComponent,
    MainClienteComponent,
    FoodCardComponent,
    SidebarOptionComponent,
    OrderListComponent,
    SelectOrderComponent,
    ManageTablesComponent,
    TableCardComponent,
    MainCocineroComponent,
    HomeCocineroComponent,
    HomeBartenderComponent,
    MainBartenderComponent,
    MainCerveceroComponent,
    HomeCerveceroComponent,
    WorkOrderComponent,
    TimeleftPipe,
    TablePipe,
    SearchOrderComponent,
    SpinnerComponent,
    RedirectComponent,
    ManageTablesAdminComponent,
    ManageOrdersAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    AngularFirestoreModule,
    AngularFireFunctionsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2300,
      positionClass: 'toast-bottom-left',
      preventDuplicates: true
    })
  ],
  providers: [AngularFireAuth, AngularFirestore],
  bootstrap: [AppComponent]
})

export class AppModule { }
