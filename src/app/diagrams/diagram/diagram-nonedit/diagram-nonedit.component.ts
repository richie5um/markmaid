import { Diagram } from './../../diagram.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-diagram-nonedit',
  templateUrl: './diagram-nonedit.component.html',
  styleUrls: ['./diagram-nonedit.component.css']
})
export class DiagramNoneditComponent implements OnInit {
  @Input() diagram: Diagram;

  constructor() { }

  ngOnInit() {
  }
}
