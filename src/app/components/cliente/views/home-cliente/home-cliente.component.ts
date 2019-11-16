import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Order } from 'src/app/models/order';

@Component({
	selector: 'app-home-cliente',
	templateUrl: './home-cliente.component.html',
	styleUrls: ['./home-cliente.component.scss']
})

export class HomeClienteComponent implements OnInit {

	public products: any[];
	public order: Order;

	constructor() { }

	ngOnInit() 
	{
		this.order = Order.Create('1');
		this.products = [
			Product.Create('B-CER-QUIL', 'Cerveza Quilmes', 'assets/img/B-CER-QUIL.jpg', 50),
			Product.Create('C-COM-MCFR', 'Milanesa con fritas', 'assets/img/C-COM-MCFR.jpg', 300),
			Product.Create('C-COM-MACF', 'Milanesa a caballo con fritas', 'assets/img/C-COM-MACF.jpg', 350),
			Product.Create('C-COM-MNAF', 'Milanesa napo con fritas', 'assets/img/C-COM-MNAF.jpg', 350),
			Product.Create('B-GAS-COCA', 'Coca-Cola', 'assets/img/B-GAS-COCA.jpg', 60),
			Product.Create('B-AGU-BONA', 'Bon Aqua', 'assets/img/B-AGU-BONA.jpg', 45),
			Product.Create('B-TRA-DDFR', 'Daikiri de frutilla', 'assets/img/B-TRA-DDFR.jpg', 70),
			Product.Create('C-COM-ENCE', 'Ensalada el Cesar', 'assets/img/C-COM-ENCE.jpg', 150),
		];
	}

	AddToOrder(prod: Product)
	{
		this.order.items.push(prod);
		console.log('order:', this.order);
	}

}
