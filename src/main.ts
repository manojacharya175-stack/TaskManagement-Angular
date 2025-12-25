import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app/app.routes';
import { jwtInterceptor } from './app/core/auth/jwt.interceptor'; 


bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(App, {
  providers:[
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([jwtInterceptor])
    )
  ]
}).catch(err => console.error(err));