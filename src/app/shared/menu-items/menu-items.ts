import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
    {state: 'home', type: 'link', name: 'Home', icon: 'home'},
    {state: 'reports', type: 'link', name: 'Reports', icon: 'insert_chart'},
    {state: 'users', type: 'link', name: 'Users', icon: 'person'},
    {state: 'employees', type: 'link', name: 'Employees', icon: 'face'},
    {state: 'stings', type: 'link', name: 'Stings', icon: 'local_pizza'},
];

@Injectable()

export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }

}
