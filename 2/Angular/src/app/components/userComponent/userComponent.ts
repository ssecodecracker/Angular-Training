import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-user',
  templateUrl: './userComponent.html',
  styleUrls: ['./userComponent.css']
})
export class UserComponent {

  @Input()
  userData;
  constructor() {}
}
