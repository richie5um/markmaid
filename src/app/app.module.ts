import { CanDeactivateGuard } from './diagrams/diagram/can-deactivate-guard.service';
import { DiagramResolverService } from './diagrams/diagram/diagram-resolver.service';
import { DiagramsService } from './diagrams/diagrams.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiagramEditComponent } from './diagrams/diagram/diagram-edit/diagram-edit.component';
import { DiagramViewComponent } from './diagrams/diagram/diagram-view/diagram-view.component';
import { DiagramComponent } from './diagrams/diagram/diagram.component';
import { DiagramsComponent } from './diagrams/diagrams.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DiagramNoneditComponent } from './diagrams/diagram/diagram-nonedit/diagram-nonedit.component';

@NgModule({
  declarations: [
    AppComponent,
    DiagramEditComponent,
    DiagramViewComponent,
    DiagramComponent,
    DiagramsComponent,
    PageNotFoundComponent,
    DiagramNoneditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule    
  ],
  providers: [
    DiagramsService,
    DiagramResolverService,
    CanDeactivateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
