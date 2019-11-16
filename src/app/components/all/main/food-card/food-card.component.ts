import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
	selector: 'app-food-card',
	templateUrl: './food-card.component.html',
	styleUrls: ['./food-card.component.scss']
})
export class FoodCardComponent implements OnInit {

	@Input() product: Product;
	@Output() added = new EventEmitter<Product>();

	constructor() { }

	ngOnInit() 
	{	}

	AddToOrder(prod: Product)
	{
		this.added.emit(prod);
	}

}
