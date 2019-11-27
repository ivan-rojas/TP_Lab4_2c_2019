import { Component, OnInit } from '@angular/core';
import { Sidebar } from 'src/app/classes/interfaces/sidebar';

@Component({
	selector: 'app-main-bartender',
	templateUrl: './main-bartender.component.html',
	styleUrls: ['./main-bartender.component.scss']
})
export class MainBartenderComponent implements OnInit, Sidebar {

	public open: boolean = false;

	toggleSidebar()
	{
		this.open = !this.open;
	}

	constructor() { }

	ngOnInit() {
	}

}
