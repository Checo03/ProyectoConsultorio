import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

/* Pagina Principal */
import { HomeComponent } from './PagInicio/home/home.component';


/* Pagina Secundarias */
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'login', component:LoginComponent}
];
