import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFireAuth } from '@angular/fire/auth';

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
    SidebarOptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    AngularFirestoreModule,
    AngularFireFunctionsModule
  ],
  providers: [AngularFireAuth, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
