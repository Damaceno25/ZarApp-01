import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cont',
  templateUrl: './cont.page.html',
  styleUrls: ['./cont.page.scss'],
})

export class ContPage {
  constructor(private router: Router) {}

  abrirDetalhe(id: number) {
    this.router.navigate(['/detalhe', id]);
  }
}