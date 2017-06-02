import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
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