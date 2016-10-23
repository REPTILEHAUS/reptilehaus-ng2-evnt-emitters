import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


import { NgTutorRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HomeComponentComponent } from './home-component/home-component.component';
import { NavigationComponent } from './navigation/navigation.component';
import { EventEmitterComponent } from './event-emitter/event-emitter.component';
import { EventEmitterParentComponent } from './event-emitter-parent/event-emitter-parent.component';
import { EventEmitterChildComponent } from './event-emitter-child/event-emitter-child.component';


@NgModule({
  declarations: [
    AppComponent,
    EventEmitterComponent,
    HomeComponentComponent,
    NavigationComponent,
    EventEmitterComponent,
    EventEmitterParentComponent,
    EventEmitterChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgTutorRoutingModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
