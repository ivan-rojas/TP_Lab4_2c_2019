import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Order, OrderState } from 'src/app/models/order';
import { CommonHelper } from 'src/app/classes/helpers/common-helper';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Cook } from 'src/app/models/product';

@Injectable({
	providedIn: 'root'
})
export class OrderService {

	constructor(private db: AngularFirestore) { }

	public Add(order: Order): void
	{
		this.db.collection("orders").add(CommonHelper.ConvertToObject(order));
	}

	public GetAllOrderByTime(): AngularFirestoreCollection<Order>
	{
		return this.db.collection("orders", ref => ref.orderBy('timestamp', 'desc'));
	}

	public GetAllByWaiterOrderByTime(email: string): any
	{
		// It's not order by time yet. It requires to create an index.
		//return this.db.collection("orders", ref => ref.where('waiter.email', '==', email).orderBy('timestamp', 'desc'));
		return this.db.collection("orders", ref => ref.where('waiter.email', '==', email));
	}

	public GetAllByCook(cook: Cook): Observable<Order[]>
	{
		let documents = this.db.collection("orders", ref => ref.orderBy('timestamp', 'desc')) as AngularFirestoreCollection<Order>;
		return documents.valueChanges().pipe(
			map(orders => {
				return orders.filter(order => {
					order = Object.assign(new Order(), order);
					var hasRole = false;
					order['items'].forEach(el => {
						if(el.cook == cook)
							hasRole = true;
					});
					if(hasRole)
						return order;
				})
			})
		);
	}

	public ChangeStatus(state: OrderState, orderCode: string): void
	{
		this.GetByCodeID(orderCode).then(order => {
			order.state = state;
			this.db.collection("orders").doc(order.id).update(order);
		});
	}

	private GetByCodeID(code: string): Promise<Order>
	{
		let documents = this.db.collection("orders", ref => ref.where('codeID', '==', code));
		return documents.get().toPromise().then(doc => {
			let theOrder = doc.docs[0].data() as Order;
			theOrder.id = doc.docs[0].id;
			return theOrder;
		})
	}

}
