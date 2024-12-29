import { appRoutes } from './app/app-routing.module'; 
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
  ],
}).catch(err => console.error(err));
