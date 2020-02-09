import { Diagram } from './diagram.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiagramsService {
  diagrams: Diagram[] = [
    new Diagram('1', 'Diagram1', `graph LR
    A --- B
    B-->C[fa:fa-ban forbidden]
    B-->D(fa:fa-spinner);`),
    new Diagram('2', 'Diagram2', `gantt
    title A Gantt Diagram
    dateFormat  YYYY-MM-DD
    section Section
    A task           :a1, 2014-01-01, 30d
    Another task     :after a1  , 20d
    section Another
    Task in sec      :2014-01-12  , 12d
    another task      : 24d`)
  ];

  constructor() { }

  getDiagrams() {
    return this.diagrams.slice();
  }

  getDiagramById(id: string): Promise<Diagram> {
    return new Promise((resolve, reject) => {
      const diagram = this.diagrams.find((diagram) => {
        return diagram.id === id;
      });

      return resolve(diagram);
    });
  }

  updateDiagram(updatedDiagram: Diagram): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const diagram = this.diagrams.find((diagram) => {
        return diagram.id === updatedDiagram.id;
      });

      if (diagram) {
        diagram.title = updatedDiagram.title;
        diagram.content = updatedDiagram.content;

        return resolve(true);
      }

      return reject('Not found');
    });
  }
}
