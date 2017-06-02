import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <custom-counter [(counter)]="counterValue" (counterChange)="myValueChange($event);"></custom-counter>
    <p><code>counterValue = {{counterValue}}</code></p>
    <hr>
    `
})
export class AppComponent{
    counterValue: number;

    constructor(){
        this.counterValue = 0;
    }

    myValueChange(newCount: number) {
        console.log(newCount);
    }
}