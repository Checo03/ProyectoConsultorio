import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './PagInicio/home/home.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProyectoConsultorio';
}
