import { CanDeactivateGuard } from './diagrams/diagram/can-deactivate-guard.service';
import { DiagramResolverService } from './diagrams/diagram/diagram-resolver.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DiagramsComponent } from './diagrams/diagrams.component';
import { DiagramComponent } from './diagrams/diagram/diagram.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'diagrams', component: DiagramsComponent, children: [
      { 
        path: ':id', 
        component: DiagramComponent, 
        resolve: { diagram: DiagramResolverService },
        canDeactivate: [CanDeactivateGuard] 
      }
    ]
  },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
