import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  'title' = 'Sistema de Libreria'

  constructor(private router: Router) {
    // Verifica al cargar la aplicación
    if (!localStorage.getItem('token') && !this.isLoginPage()) {
      this.router.navigate(['/']);
    }
  }

  private isLoginPage(): boolean {
    return window.location.pathname === '/';
  }

}
