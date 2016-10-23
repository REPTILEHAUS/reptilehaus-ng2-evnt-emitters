import { Component } from '@angular/core';

@Component({
  selector: 'app-home-component',
  template: `
      <h1>
          {{ title }}
      </h1>

      <p>
        {{ description1 +  description2 }}
      </p>
  `,
})
export class HomeComponentComponent  {
  title = 'Playing with Event Emitter';
  description1 = 'Some examples of passing data/instruction between components ';
  description2 = 'either to self or from parent to child. and also some very basic routing.';
}
