import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(private afsAuth: AngularFireAuth, private db: AngularFirestore, private router: Router) { }

  
	public RegisterWithEmail(user: User)
	{
    	return new Promise((resolve, reject) => {
			this.afsAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
				.then(userData => {
					resolve(userData);
				})
				.catch(error => console.log(reject(error)))
    	});
	}

	public LoginWithEmail(email: string, pwd: string)
	{
		return new Promise((resolve, reject) => {
			this.afsAuth.auth.signInWithEmailAndPassword(email, pwd)
			.then(userData => {
				resolve(userData);
				console.log('Login success', userData);
				this.router.navigate(['/socio']);
			})
			.catch(error => reject(error));
		});
	}

	public LogoutEmail(): void
	{
		this.afsAuth.auth.signOut();
	}

}
