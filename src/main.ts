import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app/app.routes';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(App, {
  providers:[
    provideRouter(routes),
    provideHttpClient()
  ]
})