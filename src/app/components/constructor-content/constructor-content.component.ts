import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-constructor-content',
  templateUrl: './constructor-content.component.html',
  styleUrls: ['./constructor-content.component.scss']
})
export class ConstructorContentComponent implements OnInit {


  @Input() floor: string;
  @Input() wall: string;
  @Input() door: string;

  constructor() {

  }

  ngOnInit() {
    console.log('constructor floor', this.floor);
    console.log('constructor wall', this.wall);
    console.log('constructor door --', this.door);
  }


  setFloor(floor) {

  }

}
