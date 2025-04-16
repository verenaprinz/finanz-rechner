import { appRoutes } from './app/app-routing.module'; 
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';



// bootstrapApplication(AppComponent, {
//   providers: [
//     provideRouter(appRoutes),
//   ],
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes, withNavigationFallback({
      indexHtmlPath: '/finanz-rechner/404.html'  // wichtig für GitHub Pages
    }))
  ]
}).catch(err => console.error(err));
function withNavigationFallback(arg0: {
  indexHtmlPath: string; // wichtig für GitHub Pages
}): import("@angular/router").RouterFeatures {
  throw new Error('Function not implemented.');
}

