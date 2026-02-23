import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { InicioComponent } from './app/components/inicio/inicio.component';
import { AdoptantesComponent } from './app/components/adoptantes/adoptantes.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter([
      { path: '', component: InicioComponent },
      { path: 'adoptantes', component: AdoptantesComponent },
      { path: 'adoptantes/formulario', component: AdoptantesComponent } // ✅ abre formulario
    ])
  ]
});