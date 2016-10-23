import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { HomeComponentComponent } from './home-component/home-component.component';
import { EventEmitterComponent } from './event-emitter/event-emitter.component';
import { EventEmitterParentComponent } from './event-emitter-parent/event-emitter-parent.component';


const routes: Routes = [
			{ path: '', component: HomeComponentComponent  },
			{ path: 'emitter', component:  EventEmitterComponent },
			{ path: 'parent-child-emit', component:  EventEmitterParentComponent },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },			
			// { path: '**', component: PageNotFoundComponent }
		];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class NgTutorRoutingModule { }
