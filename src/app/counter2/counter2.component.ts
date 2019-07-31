import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './counter2.component.html',
  styleUrls: ['./counter2.component.less']
})
export class Counter2Component implements OnInit {

  @Input() value: number = 0;
  @Output() valueChanged = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onPlusClicked() {
    this.value = this.value + 1;
    this.valueChanged.emit(this.value);
  }

}
