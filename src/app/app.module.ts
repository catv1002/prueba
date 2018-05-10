import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';
import { CardComponent } from './components/card/card.component';
import { ObjetoComponent } from './components/objeto/objeto.component';

import { AppComponent } from './app.component';
import { ListaComponent } from './components/lista/lista.component';

//AngularFire2
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFireModule } from 'angularfire2';

//Services 
import { DatabaseService } from './services/database.service'

//environment
import { environment } from '../environments/environment';
import { InicioComponent } from './components/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ListaComponent,
    ObjetoComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AppRoutingModule
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
