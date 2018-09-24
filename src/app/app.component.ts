import { Component, HostListener } from '@angular/core';
import { Remix } from './remix/remix.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'eth-devdoc';

  constructor(private remix: Remix) {}

  @HostListener('window:message', ['$event']) onmessage(e: MessageEvent) {
    this.remix.getMsg(e);
  }

  sendData() {
    this.remix.postMsg({
      action: 'request',
      key: 'editor',
      type: 'getCurrentFile',
      value: [],
      id: 1
  });
  }
}
