import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { AngularFireStorageModule } from 'angularfire2/storage'
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule} from 'angularfire2/database';

import { environment } from '../environments/environment.prod';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';
import { ReproductorComponent } from './manejo-de-videos/reproductor/reproductor.component';
import { NavbarComponent } from './vistas/navbar/navbar.component';
import { InterfazRetosComponent } from './vistas/interfaz-retos/interfaz-retos.component';
import { DropZoneDirective } from './directivas/drop-zone.directive';
import { FileUploadComponent } from './manejo-de-videos/file-upload/file-upload.component';
import { FileSizePipe } from './pipes/file-size.pipe';
import { LoginComponent } from './manejo-de-usuarios/login/login.component';
import { RegisterComponent } from './manejo-de-usuarios/register/register.component';
import { UsuariosComponent } from './manejo-de-usuarios/usuarios/usuarios.component';
import { HomePageComponent } from './vistas/home-page/home-page.component';
import { AuthService } from './servicios/auth.service';
import { DataService } from './servicios/data.service';

@NgModule({
  declarations: [
    AppComponent,
    ReproductorComponent,
    NavbarComponent,
    InterfazRetosComponent,
    DropZoneDirective,
    FileUploadComponent,
    FileSizePipe,
    LoginComponent,
    RegisterComponent,
    UsuariosComponent,
    HomePageComponent,
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,

  ],
  providers: [AuthService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
