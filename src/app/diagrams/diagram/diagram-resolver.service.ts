import { DiagramsService } from './../diagrams.service';
import { Diagram } from './../diagram.model';
import { Observable } from 'rxjs';
import { RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class DiagramResolverService implements Resolve<Diagram> {

  constructor(private diagramsService: DiagramsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Diagram> | Promise<Diagram> | Diagram {
    return this.diagramsService.getDiagramById(route.params['id']);
  }
}
