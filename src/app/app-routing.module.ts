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
			{path: '', component: HomeMozoComponent}
		],
	canActivate: [AuthGuard]},

	{path: 'cliente', component: MainClienteComponent,
      	children:
		[
			{path: '', component: HomeClienteComponent}
		]},
		
	{path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
