import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { InicioComponent } from './app/components/inicio/inicio.component';
import { AdoptantesListaComponent } from './app/components/adoptantes-lista/adoptantes-lista.component';
import { AdoptantesFormularioComponent } from './app/components/adoptantes-formulario/adoptantes-formulario.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter([
      { path: '', component: InicioComponent },
      {
        path: 'adoptantes',
        children: [
          { path: 'lista', component: AdoptantesListaComponent },
          { path: 'formulario', component: AdoptantesFormularioComponent },
          { path: '', redirectTo: 'formulario', pathMatch: 'full' } // ✅ abre formulario por defecto
        ]
      }
    ])
  ]
});