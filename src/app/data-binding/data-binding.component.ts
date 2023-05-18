import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit{

  public nome: string = "Lenno";
  public idade: number = 28;

  public imgSrc: string = "https://vidafullstack.com.br/wp-content/uploads/2021/07/versao-12-angular-980x487.png";
  public imgTitle: string = "Property Binding";

  public checkedDisabled: boolean = false;

  public position: {x: number, y: number} = { x: 0, y: 0 };

  constructor() {}

  ngOnInit(): void {
    
  }


  public alertaInfo() {
    alert("Deu bom.");
  }

  public alertaInfoPassandoDado(valor: string) {
    alert(valor);
  }

  public alertaInfoEvendoClickF12(valor: MouseEvent) {
    //alert(valor);
    console.log(valor);
  }

  public mouseMoveTest(valor: MouseEvent){
    //console.log(valor);

    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }

}
