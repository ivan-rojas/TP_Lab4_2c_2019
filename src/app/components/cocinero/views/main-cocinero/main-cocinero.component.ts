import { Component, OnInit } from '@angular/core';
import { Sidebar } from 'src/app/classes/interfaces/sidebar';

@Component({
	selector: 'app-main-cocinero',
	templateUrl: './main-cocinero.component.html',
	styleUrls: ['./main-cocinero.component.scss']
})
export class MainCocineroComponent implements OnInit, Sidebar {

	public open: boolean = false;

	toggleSidebar()
	{
		this.open = !this.open;
	}

	constructor() { }

	ngOnInit() {
	}

}
