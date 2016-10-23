import { Component, Output, EventEmitter, Input } from '@angular/core';

/*

This Component is not hooked up to any routes, it only appears in the 
src/app/event-emitter-parent/event-emitter-parent.component.ts Component to show how to emit an event 
from a child to the parent.

basically it passes the message "THIS IS PASSED FROM THE CHILD COMPONENT" to the getNotification() function
of the parent.

*/


@Component({
  selector: 'app-event-emitter-child',
    template : `

 <h3>{{ event_type_1 }}</h3>    
   <div class="counter">
      <div class="counter__container">
        <button (click)="decrement();" class="counter__button">
          -
        </button>
        <input type="text" class="counter__input" [value]="counterValue">
        <button (click)="increment();" class="counter__button">
          +
        </button>
      </div>
    </div>

     <h3>{{ event_type_2 }}</h3>      
    <div style="clear:both;"></div>
   <div class="send-message-to-parent"> 
      <button (click)="sendNotification()">Show Secret Message!</button>
    </div>`,
  styleUrls: ['./event-emitter-child.component.css']
})
export class EventEmitterChildComponent {

  constructor() { }


  event_type_1 = 'Incrementing and Decrementing';
  event_type_2 = 'Passing A Simple Message';

  @Input('init') counterValue = 0;
  @Output('change') counterChange: EventEmitter<any> = new EventEmitter();
  
  increment() {
    this.counterValue++;
    this.counterChange.emit({
      value: this.counterValue
    })
  }

  decrement() {
    this.counterValue--;
    this.counterChange.emit({
      value: this.counterValue
    })
  }


    @Output() notifyParent: EventEmitter<any> = new EventEmitter();

    sendNotification() {
        this.notifyParent.emit('THIS IS PASSED FROM THE CHILD COMPONENT');
    }



}
