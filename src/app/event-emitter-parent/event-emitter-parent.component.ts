import { Component } from '@angular/core';

@Component({
  selector: 'app-event-emitter-parent',
    template : `
      
        <h1>{{ title }}</h1>

        <app-event-emitter-child 
          (notifyParent)="getNotification($event)" 
          [init]="myValue" (change)="CounterValueChange($event);"
          ></app-event-emitter-child>

         <h2>{{ message }}</h2>

    `,
})
export class EventEmitterParentComponent {

  title = 'Different Emitters From A Child Component';

  public myValue: number = 2;
  public message: string = '';

  constructor() { }

  CounterValueChange(event){
    console.log(event);
  }
  
  
  getNotification(evt) {
    this.message = evt;
    // alert(evt);
  }


}





