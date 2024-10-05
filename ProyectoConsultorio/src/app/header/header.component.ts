import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../PagInicio/home/home.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
