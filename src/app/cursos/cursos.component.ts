import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  template: `<h2>What Can JavaScript Do?</h2>

  <p id="demo">JavaScript can hide HTML elements.</p>

  <button type="button" onclick="document.getElementById('demo').style.display='none'">Click Me!</button>`
})
export class CursosComponent implements OnInit {


  nomePortal: string;



  cursos: string[];

  constructor(private CursosService: CursosService) {

    this.nomePortal = 'Primeiro Portal';

    /*iremos obter esta informacao do service como boa prática do Angular

    for(let i=0; i<this.cursos.length; i++){

      let curso = this.cursos[i];
    }*/

    //var servico = new CursosService();



    this.cursos = this.CursosService.getCursos();

  }

  ngOnInit(): void {
  }

}
