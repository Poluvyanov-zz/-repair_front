import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-constructor-content',
  templateUrl: './constructor-content.component.html',
  styleUrls: ['./constructor-content.component.scss']
})
export class ConstructorContentComponent implements OnInit {


  @Input() floor: string;

  constructor() {

  }

  ngOnInit() {
    console.log('constructor', this.floor);
  }


  setFloor(floor) {

  }

}
