import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// Rutas
import { APP_ROUTING } from './app.routes';
// Servicios
import { RecetasService } from './services/recetas.service';
import { MessageService } from './services/message.service';
// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { RecetasComponent} from './components/recetas/recetas.component';
import { RecetaComponent } from './components/receta/receta.component';
import { ResultadorecetaComponent } from './components/resultadoreceta/resultadoreceta.component';
import { MessagesComponent } from './components/messages/messages.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    RecetasComponent,
    RecetaComponent,
    ResultadorecetaComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    RecetasService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
