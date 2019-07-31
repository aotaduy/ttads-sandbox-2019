import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.less']
})
export class CounterComponent implements OnInit {

  @Input() count = 0;
  @Output() plusClicked = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  alCuadrado(x){
    return x*x;
  }

  onPlusClick() {
    this.count = this.count + 1;
    this.plusClicked.emit(this.count);
  }
  onMinusClick() {
    this.count = this.count - 1;
  }
}
