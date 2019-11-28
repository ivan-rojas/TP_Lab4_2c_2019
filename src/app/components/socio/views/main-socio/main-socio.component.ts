import { Component, OnInit } from '@angular/core';
import { Sidebar } from 'src/app/classes/interfaces/sidebar';

@Component({
	selector: 'app-main-socio',
	templateUrl: './main-socio.component.html',
	styleUrls: ['./main-socio.component.scss']
})
export class MainSocioComponent implements OnInit, Sidebar {

	public open: boolean = false;

	toggleSidebar()
	{
		this.open = !this.open;
	}

	constructor() { }

	ngOnInit() {
	}

}
