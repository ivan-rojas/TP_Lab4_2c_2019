import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { take, map, tap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})

export class AuthGuard implements CanActivate {

	constructor(private afsAuth: AngularFireAuth, private router: Router) {	}

	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean 
	{
		return this.afsAuth.authState
		.pipe(
			take(1),
			map(authState => !!authState),
			tap(auth => {
				if(!auth)
					this.router.navigate(['/app/login']);	
				else
					console.log('Is auth:', auth);
			})
		)
	}
  
}
