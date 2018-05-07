import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { HomePageComponent } from './vistas/home-page/home-page.component';
import { LoginComponent } from './manejo-de-usuarios/login/login.component';
import { RegisterComponent } from './manejo-de-usuarios/register/register.component';
import { UsuariosComponent } from './manejo-de-usuarios/usuarios/usuarios.component';
import { ReproductorComponent } from './manejo-de-videos/reproductor/reproductor.component';
import { PerfilComponent } from './manejo-de-usuarios/perfil/perfil.component';
import { ListaVideosComponent } from './vistas/lista-videos/lista-videos.component';
import { InterfazSubirVideosComponent } from './vistas/interfaz-subir-videos/interfaz-subir-videos.component';
import { InterfazSubirRetosComponent } from './vistas/interfaz-subir-retos/interfaz-subir-retos.component';

const routes: Routes = [
    {path: '', component:HomePageComponent},
    {path: 'login', component:LoginComponent},
    {path: 'register', component:RegisterComponent},
    {path: 'users', component:UsuariosComponent},
    {path: 'list', component:ListaVideosComponent},
    {path: 'watch', component:ReproductorComponent},
    {path: 'upload', component:InterfazSubirVideosComponent},
    {path: 'challenge', component:InterfazSubirRetosComponent},
    {path: 'profile', component:PerfilComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
