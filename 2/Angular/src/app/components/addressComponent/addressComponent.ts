import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './addressComponent.html',
  styleUrls: ['./addressComponent.css']
})
export class AddressComponent {

  @Input()
  userAddress;

  constructor() {}
}
