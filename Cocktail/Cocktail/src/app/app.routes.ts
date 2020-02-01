import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { RecetasComponent } from './components/recetas/recetas.component';
import { RecetaComponent } from './components/receta/receta.component';
import { ResultadorecetaComponent } from './components/resultadoreceta/resultadoreceta.component';
import { MessagesComponent } from './components/messages/messages.component';



// toda constante se debe declarar en MAYÚSCULAS por convensión.
const APP_ROUTES: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'about', component: AboutComponent },
{ path: 'cocktail', component: RecetasComponent },
{ path: 'cocktail/:id', component: RecetaComponent },
{ path: 'buscar/:termino', component: ResultadorecetaComponent },
{ path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
