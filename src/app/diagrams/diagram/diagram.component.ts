import { DiagramsService } from './../diagrams.service';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from './can-deactivate-guard.service';
import { Diagram } from './../diagram.model';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Data, CanDeactivate } from '@angular/router';

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.css']
})
export class DiagramComponent implements OnInit, CanDeactivate<CanComponentDeactivate> {
  diagram: Diagram;
  isEditing: boolean = false;
  unsavedChanges: boolean = false;

  constructor(
    private diagramsService: DiagramsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      this.diagram = data['diagram'];
    });
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.unsavedChanges) {
      return confirm('Do you want to discard the changes?');
    }

    return true;
  }

  edit() {
    this.isEditing = true;
    this.unsavedChanges = false;
  }

  cancel() {
    this.diagramsService
      .getDiagramById(this.diagram.id)
      .then((diagram) => {
        if (diagram) {
          this.diagram = diagram;
          this.isEditing = false;
          this.unsavedChanges = false;
        }
      });
  }

  save() {
    this.diagramsService
      .updateDiagram(this.diagram)
      .then((saved) => {
        if (saved) {
          this.unsavedChanges = false;
        }
      });
  }

  diagramUpdated() {
    this.unsavedChanges = true;
  }
}
