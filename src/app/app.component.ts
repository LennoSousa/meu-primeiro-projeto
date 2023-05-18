import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  //templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.scss'],

  //necessário comentar o templateURL para funcionar esse template apenas.
  template: `<app-title *ngIf="destruir"></app-title>
  {{valor}}
  <button (click)="adicionar()">Adicionar</button>
  <button (click)="destruirComponent()">Destruir componente</button>
  `

})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterViewInit, AfterContentChecked, AfterViewChecked{

  public valor: number = 1;
  public destruir: boolean = true;

  constructor() {}

  public adicionar(): number{
    return this.valor += 1;
  }

  public destruirComponent() {
    this.destruir = false;
  }

  ngOnInit(): void {

    setTimeout( ()=> {
      console.log(1)
    }, 5000)
    
  }

  ngDoCheck(): void {
    console.log("ngDoCheck")
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }

}
