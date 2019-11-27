import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Order, OrderState } from 'src/app/models/order';
import { Product } from 'src/app/models/product';

@Component({
	selector: 'app-select-order',
	templateUrl: './select-order.component.html',
	styleUrls: ['./select-order.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectOrderComponent implements OnInit {

	@Input() order: Order;

	public selectedItem: Product;

	constructor() { }

	ngOnInit() {
	}

	public CanBeServed(): boolean
	{
		let can = false;
		if(this.order.state == OrderState.readyToServe)
			can = true;
		return can;
	}

	public SelectItem(item: Product): void
	{
		this.selectedItem = item;
	}
}
