import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-constructor',
  templateUrl: './constructor.component.html',
  styleUrls: ['./constructor.component.scss']
})
export class ConstructorComponent implements OnInit {

  floor: string;

  constructor() {
  }

  ngOnInit() {
  }

  dataChangeHandler(e) {
    this.floor = e;
  }

}
