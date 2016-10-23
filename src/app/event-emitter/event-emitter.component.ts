import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-event-emitter',
  template: `
  <div class="wrapper">
  	<h1>
		{{ title }}
  	</h1>

    <button (click)="toggle()">CLICK ME TO SUBMIT EVENT</button>
    
    <div [hidden]="!visible">
      YOU HAVE EMITTED AN EVENT
    </div>
 </div>`,
})


export class EventEmitterComponent implements OnInit {

  constructor() { }

  title = 'Example of Event Emitter!';

  visible: boolean = false;

  @Output() open: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();


  ngOnInit() {
  }

  toggle() {
    
    this.visible = !this.visible;

    if (this.visible) {

      this.open.emit(null);

    } else {

      this.close.emit(null);

    }
  }


}
