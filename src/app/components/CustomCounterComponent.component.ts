import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'custom-counter',
    template: `
    First counter
    <button (click)="decrement()">-</button>
    <span>{{this.counter}}</span>
    <button (click)="increment()">+</button>
    `
})
export class CustomCounterComponent {
    @Input() counter: number;
    @Output() counterChange = new EventEmitter();

    decrement() {
        this.counter--;
        this.counterChange.emit(this.counter)
    }

    increment() {
        this.counter++;
        this.counterChange.emit(this.counter)
    }
}