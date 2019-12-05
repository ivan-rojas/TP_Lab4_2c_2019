import { Directive, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';

@Directive({
	selector: '[noOrders]'
})
export class NoOrdersDirective implements OnChanges {

	@Input('noOrders') orders: Observable<any>;

	constructor() { }

	ngOnChanges()
	{
		
	}

	

	// private CheckOrders(): boolean
	// {
	// 	if(this.orders)
	// 	{
	// 		this.orders.forEach(x => {
	// 			if(x[0])
	// 				return true;
	// 		});
	// 	}
	// 	return false;
	// }

}
