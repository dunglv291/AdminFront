import {Component, OnInit} from '@angular/core';
import { MenuServices } from 'src/app/core/services/menu.services';

@Component({
  selector: 'Menus',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  listMenu: any
  constructor(
    private menuServices: MenuServices
  ) {

  }
  ngOnInit() {
    this.menuServices.getData().subscribe(res => {
      this.listMenu = res
    })
  }
}
