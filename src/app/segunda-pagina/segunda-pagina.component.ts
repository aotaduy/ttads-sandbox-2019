import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-segunda-pagina',
  templateUrl: './segunda-pagina.component.html',
  styleUrls: ['./segunda-pagina.component.less']
})
export class SegundaPaginaComponent implements OnInit {


  id;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => this.id = params.id);
    console.log('Segunda pagina inicializado')
  }

}
