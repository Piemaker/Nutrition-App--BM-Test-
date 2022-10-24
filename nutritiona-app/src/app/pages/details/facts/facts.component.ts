import { FactList, ResponseI } from './../../../models/interfaces';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.scss'],
})
export class FactsComponent implements OnInit {
  @Input()
  factsData!: ResponseI;
  constructor() {}

  ngOnInit(): void {}
}
