import { Diagram } from './diagram.model';
import { DiagramsService } from './diagrams.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diagrams',
  templateUrl: './diagrams.component.html',
  styleUrls: ['./diagrams.component.css']
})
export class DiagramsComponent implements OnInit {
  diagrams: Diagram[];

  constructor(private diagramsService: DiagramsService) { }

  ngOnInit() {
    this.diagrams = this.diagramsService.getDiagrams();
  }

}
