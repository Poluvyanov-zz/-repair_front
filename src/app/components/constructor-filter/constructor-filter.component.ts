import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {$e} from 'codelyzer/angular/styles/chars';

@Component({
  selector: 'app-constructor-filter',
  templateUrl: './constructor-filter.component.html',
  styleUrls: ['./constructor-filter.component.scss']
})
export class ConstructorFilterComponent implements OnInit {
  @Output() dataChanged: EventEmitter<any> = new EventEmitter<any>();
  isLinear = false;


  constructor() {
  }

  ngOnInit() {

  }

  floor(e) {
    this.dataChanged.emit(e);
  }

}
