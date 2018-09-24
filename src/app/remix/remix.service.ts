import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Remix {

    private remixUrl = ['https://remix-alpha.ethereum.org'];
    private source: Window;

    constructor() {
        this.source = window.parent;
    }

    public getMsg(event: MessageEvent) {
        if (this.remixUrl.indexOf(event.origin) === -1) { return; }
        this.source = event.source as Window;
        console.log(event);
    }

    public postMsg(message: Object) {
        const msg = JSON.stringify(message);
        this.source.postMessage(msg, '*');
    }
}
