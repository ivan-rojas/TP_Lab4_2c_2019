import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Order, OrderState } from 'src/app/models/order';
import { Product, FoodState, Cook } from 'src/app/models/product';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
	selector: 'app-work-order',
	templateUrl: './work-order.component.html',
	styleUrls: ['./work-order.component.scss']
})
export class WorkOrderComponent implements OnInit, OnChanges {

	@Input() order: Order;

	public selectedItem: Product;
	public me: User;
	public addedTime: number;

	constructor(private authService: AuthService) { }

	ngOnInit() {
		this.authService.GetCurrentUser().then(user => this.me = user);
	}

	ngOnChanges() {
		this.selectedItem = null;
	}

	public IsPending(): boolean
	{
		let is = false;
		if(this.selectedItem.state == FoodState.pending)
			is = true;
		return is;
	}

	public IsCooking(): boolean
	{
		let is = false;
		if(this.selectedItem.state == FoodState.preparing)
			is = true;
		return is;
	}

	public IsAvailableForMe(): boolean
	{
		let available = false;
		if(this.selectedItem)
		{
			let myRole: string = this.me.role;
			if(this.selectedItem.cook == myRole as Cook && this.selectedItem.state != FoodState.finished)
			{
				available = true;
			}
		}
		return available;
	}

	public SelectItem(item: Product): void
	{
		this.selectedItem = item;
	}

	public BeginCook(withTime: boolean): void
	{
		if(withTime)
			this.order.timeLeft; // Add more time
		this.AssignToMe();
		this.selectedItem.state = FoodState.preparing;
		this.order = Object.assign(new Order(), this.order);
		this.order.UpdateOrderState();
		// save in database
	}

	public ReadyToServe(): void
	{
		this.selectedItem.state = FoodState.finished;
		this.order = Object.assign(new Order(), this.order);
		this.order.UpdateOrderState();
		// save in database
	}

	private AssignToMe(): void
	{
		this.selectedItem.worker = this.me;
	}

}
