import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(private router: Router) {}

  login() {
    // Aqui você pode adicionar lógica de autenticação se necessário

    // Redirecionar para a página "cont"
    this.router.navigate(['/cont']);
  }
}
