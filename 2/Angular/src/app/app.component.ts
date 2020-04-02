import { Component } from '@angular/core';
import { USERS } from './mockdata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {}

  user = [...USERS];
}
