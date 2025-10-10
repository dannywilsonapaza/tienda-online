import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    // Aquí puedes agregar proveedores específicos para la aplicación
    provideHttpClient(),
    ...appConfig.providers
  ]
})
  .catch((err) => console.error(err));
