import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="/">Inicio</a> |
      <a routerLink="/contacto">Contacto</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`nav a { margin: 1rem; color: black; text-decoration: none; }`]
})
export class AppComponent { }
