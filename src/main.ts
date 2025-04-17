import { appRoutes } from './app/app-routing.module'; 
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, withHashLocation } from '@angular/router';



// bootstrapApplication(AppComponent, {
//   providers: [
//     provideRouter(appRoutes),
//   ],
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes, withHashLocation()), // <- das ist wichtig
  ],
}).catch(err => console.error(err));


