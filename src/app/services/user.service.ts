import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';

@Injectable({
	providedIn: 'root'
})

export class UserService {

	constructor(private db: AngularFirestore, private afsFunc: AngularFireFunctions) { }

	public SetRole(email: string, role: string): void
	{
		this.SetRoleInCloudFunctions(email, role);
	}

	private SetRoleInCloudFunctions(email: string, role: string): void
	{
		const setRoleFunction = this.afsFunc.httpsCallable('setRole');
		setRoleFunction({email: email, desiredRole: role})
			.subscribe(response => console.log(response));
	}
  
}
