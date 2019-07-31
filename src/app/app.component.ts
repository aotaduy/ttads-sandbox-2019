import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'ttads';
  lista = [

    'Hola', 'Que', 'Tal', 'Chicxs'
  ]
  public countedValue = 0;
  valor = 10;
  onFirstPlusClicked(value) {
    this.countedValue = value;
  }
}
