import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../PagInicio/home/home.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, RouterOutlet, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  login: boolean = false;
  isAdmin: boolean = false;
  router = inject(Router);

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.isLogin$.subscribe(async (status: boolean) => {
      this.login = status;

      if (status) {
        this.isAdmin = await this.authService.isAdmin();
      } else {
        this.isAdmin = false; 
      }
    });
  }

  onLogout() {
    this.authService.logout().subscribe(() => {
      this.login = false;
      this.isAdmin = false;
      this.router.navigateByUrl('/login');
    });
  }
}

