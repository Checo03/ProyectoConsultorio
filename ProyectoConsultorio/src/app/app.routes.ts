import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';


import { HomeComponent } from './PagInicio/home/home.component';//Pagina Principal

import { LoginComponent } from './login/login.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { InventarioComponent } from './inventario/inventario.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'login', component:LoginComponent},
    {path: 'perfil', component:PerfilUsuarioComponent},
    {path: 'usuario', component:UsuariosComponent},
    {path: 'inventario', component:InventarioComponent}
];
