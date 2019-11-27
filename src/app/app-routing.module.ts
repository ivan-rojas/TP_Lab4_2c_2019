import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainSocioComponent } from './components/socio/views/main-socio/main-socio.component';
import { HomeSocioComponent } from './components/socio/views/home-socio/home-socio.component';
import { MainMozoComponent } from './components/mozo/views/main-mozo/main-mozo.component';
import { HomeMozoComponent } from './components/mozo/views/home-mozo/home-mozo.component';
import { LoginComponent } from './components/all/views/login/login.component';
import { RegisterComponent } from './components/all/views/register/register.component';
import { MainGeneralComponent } from './components/all/views/main-general/main-general.component';
import { ErrorComponent } from './components/all/views/error/error.component';
import { MainClienteComponent } from './components/cliente/views/main-cliente/main-cliente.component';
import { HomeClienteComponent } from './components/cliente/views/home-cliente/home-cliente.component';
import { AuthGuard } from './guards/auth.guard';
import { ManageTablesComponent } from './components/mozo/views/manage-tables/manage-tables.component';
import { MainCerveceroComponent } from './components/cervecero/views/main-cervecero/main-cervecero.component';
import { HomeCerveceroComponent } from './components/cervecero/views/home-cervecero/home-cervecero.component';
import { MainCocineroComponent } from './components/cocinero/views/main-cocinero/main-cocinero.component';
import { HomeCocineroComponent } from './components/cocinero/views/home-cocinero/home-cocinero.component';
import { MainBartenderComponent } from './components/bartender/views/main-bartender/main-bartender.component';
import { HomeBartenderComponent } from './components/bartender/views/home-bartender/home-bartender.component';


const routes: Routes = [
  
  	{path: 'app', component: MainGeneralComponent,
		children:	
		[
      		{path: 'login', component: LoginComponent},
      		{path: 'register', component: RegisterComponent}
		]},
		
  	{path: 'socio', component: MainSocioComponent,
      	children:
		[
			{path: '', component: HomeSocioComponent}
		],
	canActivate: [AuthGuard]},

  	{path: 'mozo', component: MainMozoComponent,
      	children:
		[
			{path: '', component: HomeMozoComponent},
			{path: 'tables', component: ManageTablesComponent}
		],
	canActivate: [AuthGuard]},

	{path: 'cervecero', component: MainCerveceroComponent,
      	children:
		[
			{path: '', component: HomeCerveceroComponent},
		],
	canActivate: [AuthGuard]},

	{path: 'cocinero', component: MainCocineroComponent,
      	children:
		[
			{path: '', component: HomeCocineroComponent},
		],
	canActivate: [AuthGuard]},

	{path: 'bartender', component: MainBartenderComponent,
      	children:
		[
			{path: '', component: HomeBartenderComponent},
		],
	canActivate: [AuthGuard]},

	{path: 'cliente', component: MainClienteComponent,
      	children:
		[
			{path: '', component: HomeClienteComponent}
		],
	canActivate: [AuthGuard]},
		
	{path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
