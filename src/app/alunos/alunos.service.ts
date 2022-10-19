import { Injectable } from '@angular/core';

@Injectable()
export class AlunosService {

  private alunos: any[] = [
    {
      id: 1,
      nome: 'Emanoel',
      email: 'emanoel@email.com'
    },
    {
      id: 2,
      nome: 'Ana',
      email: 'ana@email.com'
    },
    {
      id: 3,
      nome: 'David',
      email: 'david@email.com'
    },
    {
      id: 4,
      nome: 'Lucas',
      email: 'lucas@email.com'
    },
  ];

  getAlunos() {
    return this.alunos;
  }

  getAluno(id: number) {
    for (let i=0; i<this.alunos.length; i++) {
      let aluno = this.alunos[i];
      if (aluno.id == id) {
        return aluno;
      }
    } return null;
  }

  constructor() { }
}
