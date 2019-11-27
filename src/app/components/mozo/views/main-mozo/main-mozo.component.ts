import { Component, OnInit } from '@angular/core';
import { Sidebar } from 'src/app/classes/interfaces/sidebar';

@Component({
	selector: 'app-main-mozo',
	templateUrl: './main-mozo.component.html',
	styleUrls: ['./main-mozo.component.scss']
})
export class MainMozoComponent implements OnInit, Sidebar {

	public open: boolean = false;

	toggleSidebar()
	{
		this.open = !this.open;
	}

	constructor() { }

	ngOnInit() {
	}

}
