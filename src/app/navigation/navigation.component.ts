import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
    <a routerLink="/">Home</a>   || 
    <a routerLink="/emitter">EventEmitter</a> || 
    <a routerLink="/parent-child-emit">Emit from parent-child</a>  
  `
})
export class NavigationComponent {}
