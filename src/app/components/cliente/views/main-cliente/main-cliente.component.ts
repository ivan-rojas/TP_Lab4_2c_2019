import { Component, OnInit, Output } from '@angular/core';
import { Sidebar } from 'src/app/classes/interfaces/sidebar';

@Component({
  selector: 'app-main-cliente',
  templateUrl: './main-cliente.component.html',
  styleUrls: ['./main-cliente.component.scss']
})
export class MainClienteComponent implements OnInit, Sidebar {

  public open: boolean = false;

  toggleSidebar()
  {
    this.open = !this.open;
  }

  constructor() { }

  ngOnInit() {
  }
}
