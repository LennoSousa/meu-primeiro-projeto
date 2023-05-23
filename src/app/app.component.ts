import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  //templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.scss'],
  //  template: `
  //  <app-data-binding></app-data-binding>
  //  <app-diretivas-estruturais></app-diretivas-estruturais>
  //  <app-diretivas-atributos><h1>Aulas de Diretivas Atributo </h1> <hr></app-diretivas-atributos>`
  
  template: `
  <app-new-component></app-new-component>
  `

  //necessário comentar o templateURL para funcionar esse template apenas.
  // template: `<app-title *ngIf="destruir"></app-title>
  // {{valor}}
  // <button (click)="adicionar()">Adicionar</button>
  // <button (click)="destruirComponent()">Destruir componente</button>
  // `

})
export class AppComponent implements OnInit{

  constructor() {}

  ngOnInit(): void {
    
  }

}
