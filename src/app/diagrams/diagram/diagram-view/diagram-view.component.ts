import { Diagram } from './../../diagram.model';
import { Component, OnInit, Input, AfterContentInit, ViewChild } from '@angular/core';
import * as mermaid from 'mermaid';

/* Notes:
 * https://github.com/mermaid-js/mermaid/issues/1082
 */

@Component({
  selector: 'app-diagram-view',
  templateUrl: './diagram-view.component.html',
  styleUrls: ['./diagram-view.component.css']
})
export class DiagramViewComponent implements OnInit, AfterContentInit {
  @Input() diagramContent: string;
  parserMessage: string;

  @ViewChild('mermaid', { static: true })
  public mermaidDiv;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.refresh();
  }

  public ngAfterContentInit() {
    mermaid.initialize({
      theme: "forest"
    });

    this.refresh();
  }

  refresh() {
    try {
      this.parserMessage = '';
      mermaid.parse(this.diagramContent);

      const element: any = this.mermaidDiv.nativeElement;
      const graphDefinition = this.diagramContent;
      mermaid.render("graphDiv", graphDefinition, (svgCode, bindFunctions) => {
        element.innerHTML = svgCode;
      });
    } catch (e) {
      this.parserMessage = e.str;
    }
  }
}
