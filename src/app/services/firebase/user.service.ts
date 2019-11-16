import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { User } from 'src/app/models/user';
import { CommonHelper } from 'src/app/classes/helpers/common-helper';

@Injectable({
	providedIn: 'root'
})

export class UserService {

	constructor(private db: AngularFirestore, private afsFunc: AngularFireFunctions) { }

	public SetRole(email: string, role: string): void
	{
		this.SetRoleInFirebase(email, role);
		this.SetRoleInCloudFunctions(email, role);
	}

	public Add(user: User): void
	{
		this.db.collection("users").add(CommonHelper.ConvertToObject(user));
	}

	private SetRoleInCloudFunctions(email: string, role: string): void
	{
		const setRoleFunction = this.afsFunc.httpsCallable('setRole');
		setRoleFunction({email: email, desiredRole: role})
			.subscribe(response => console.log(response));
	}

	private SetRoleInFirebase(email: string, role: string): void
	{
		this.GetUserByEmail(email).then(doc => {
			let user = doc.data;
			user["role"] = role;
			this.db.collection('users').doc(doc.id).update(user);
			console.log('User role updated on firebase!')
		})
	}

	private GetUserByEmail(email: string)
	{
		let docRef = this.db.collection('users', ref => ref.where('email', '==', email));
		return docRef.get().toPromise().then(doc => {
			 return {id: doc.docs[0].id, data: doc.docs[0].data()};
		})
	}

}
