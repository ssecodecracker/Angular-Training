import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './companyComponent.html',
  styleUrls: ['./companyComponent.css']
})
export class CompanyComponent {

  @Input()
  companyData;

  constructor() {}
}
