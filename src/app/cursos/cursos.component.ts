import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {


  nomePortal: string;

  cursos: string[];

  constructor(private CursosService: CursosService) {

    this.nomePortal = 'http://praisetecnologia.com.br';

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
