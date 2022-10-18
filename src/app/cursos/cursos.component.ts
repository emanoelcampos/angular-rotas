import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any[];

  constructor(private cursosService: CursosService) {
    this.cursos = [];
   }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
  }

}
