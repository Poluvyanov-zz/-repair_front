import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {$e} from 'codelyzer/angular/styles/chars';

@Component({
  selector: 'app-constructor-filter',
  templateUrl: './constructor-filter.component.html',
  styleUrls: ['./constructor-filter.component.scss']
})
export class ConstructorFilterComponent implements OnInit {
  @Output() dataChangedFloor: EventEmitter<any> = new EventEmitter<any>();
  @Output() dataChangedWall: EventEmitter<any> = new EventEmitter<any>();
  @Output() dataChangedDoor: EventEmitter<any> = new EventEmitter<any>();
  isLinear = false;
  floorClass: string;
  wallClass: string;
  doorClass: string;


  constructor() {
  }

  ngOnInit() {
    this.floorClass = 'floor-1';
    this.wallClass = 'wall-1';
  }

  floor(e) {
    this.floorClass = e;
    console.log('dataChangedFloor', e);
    this.dataChangedFloor.emit(e);
  }

  wall(e) {
    this.wallClass = e;
    console.log('dataChangedWall', e);
    this.dataChangedWall.emit(e);
  }

  door(e) {
    this.doorClass = e;
    console.log('dataChangedDoor',  this.doorClass);
    this.dataChangedDoor.emit(e);
  }

}
