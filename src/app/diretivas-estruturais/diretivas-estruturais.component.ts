import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit{

  public condition: boolean = true;
  public conditionClick: boolean = true;
  public list: Array<{ nome: string, idade: number}> = [
    { nome: "Lenno Sousa", idade: 28},
    { nome: "Fernanda Sato", idade: 26 }
  ];

  public nome: string = "fernanda";

  constructor() {}

  ngOnInit(): void {
    setInterval( ()=> {
      if(this.condition){
        this.condition = false;
      }else{
        this.condition = true;
      }
    }, 2000)
  }

  public onClick(){
    if(this.conditionClick){
      this.conditionClick = false;
    }else{
      this.conditionClick = true;
    }
  }

  public onClickAddList(){
    this.list.push({nome: "test", idade: 12})
  }

  public onClickEventList(event: number) {
    console.log(event);

    //splice serve para deletar os valores da lista, nesse exemplo.
    this.list.splice(event, 1);
  }
}
