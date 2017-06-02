import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { CustomCounterComponent }  from './components/CustomCounterComponent.component';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, CustomCounterComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
