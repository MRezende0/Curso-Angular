import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {
  
  nomePortal: string;

  cursos: string[] = ['Java', 'Angular', 'UX'];

  constructor() {
    this.nomePortal = 'http://loiane.training';

    for (let i=0; i=this.cursos.length; i++) {
      let curso = this.cursos[i];
    }
  }
}
