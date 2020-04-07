import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/index';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html'
})
export class MessagesComponent implements OnInit{
  constructor(public messageService: MessageService) {
  }

  ngOnInit() {
    // tslint:disable-next-line: no-debugger
    debugger;
  }
}
