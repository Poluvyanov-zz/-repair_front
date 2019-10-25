import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-constructor',
  templateUrl: './constructor.component.html',
  styleUrls: ['./constructor.component.scss']
})
export class ConstructorComponent implements OnInit {

  floor: string;
  wall: string;
  door: string;

  constructor() {
  }

  ngOnInit() {
  }

  dataChangeHandlerFloor(e) {
    this.floor = e;
  }

  dataChangeHandlerWall(e) {
    this.wall = e;
  }

  dataChangeHandlerDoor(e) {
    this.door = e;
  }

}
