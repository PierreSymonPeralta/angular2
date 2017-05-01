import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-detail-child',
  templateUrl: './game-detail-child.component.html',
  styleUrls: ['./game-detail-child.component.css'],
  inputs:['parentValue'],
  outputs:['childEvent']
})
export class GameDetailChildComponent implements OnInit {

  private parentValue;
  private inputValue:string;
  private childEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onChange(value:string):void{
    this.childEvent.emit(value)
  }

  onKey(event:any):void{
    this.inputValue = event.target.value;
  }
}
