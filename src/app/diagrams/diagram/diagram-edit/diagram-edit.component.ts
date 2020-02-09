import { Diagram } from './../../diagram.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-diagram-edit',
  templateUrl: './diagram-edit.component.html',
  styleUrls: ['./diagram-edit.component.css']
})
export class DiagramEditComponent implements OnInit {
  @Input() diagram: Diagram;
  @Output() onDiagramUpdated = new EventEmitter<Diagram>();

  constructor() { }

  ngOnInit() {
  }

  diagramUpdated() {
    this.onDiagramUpdated.emit(this.diagram);
  }
}
