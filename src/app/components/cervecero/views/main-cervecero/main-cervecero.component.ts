import { Component, OnInit } from '@angular/core';
import { Sidebar } from 'src/app/classes/interfaces/sidebar';

@Component({
	selector: 'app-main-cervecero',
	templateUrl: './main-cervecero.component.html',
	styleUrls: ['./main-cervecero.component.scss']
})
export class MainCerveceroComponent implements OnInit, Sidebar {

	public open: boolean = false;

	toggleSidebar()
	{
		this.open = !this.open;
	}

	constructor() { }

	ngOnInit() {
	}

}
