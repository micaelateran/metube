import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { HomePageComponent } from './vistas/home-page/home-page.component';
import { LoginComponent } from './manejo-de-usuarios/login/login.component';
import { RegisterComponent } from './manejo-de-usuarios/register/register.component';
import { UsuariosComponent } from './manejo-de-usuarios/usuarios/usuarios.component';
import { ReproductorComponent } from './manejo-de-videos/reproductor/reproductor.component';
import { FileUploadComponent } from './manejo-de-videos/file-upload/file-upload.component';
import { PerfilComponent } from './manejo-de-usuarios/perfil/perfil.component';

const routes: Routes = [
    {path: '', component:HomePageComponent},
    {path: 'login', component:LoginComponent},
    {path: 'register', component:RegisterComponent},
    {path: 'users', component:UsuariosComponent},
    {path: 'watch', component:ReproductorComponent},
    {path: 'upload', component:FileUploadComponent},
    {path: 'profile', component:PerfilComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}


