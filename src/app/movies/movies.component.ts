import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MovieService} from './movie.service';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.less']
})
export class MoviesComponent implements OnInit {

  constructor(private http: HttpClient, private service: MovieService) { }
  results: any;
  ngOnInit() {
  this.service.search('star').subscribe(
    (response) => this.results = response
  );
  }

  getExample() {
    function procesarRespuesta(response) { console.log('respondio el get')};
    this.http.get('assets/examplse.json').subscribe(
      procesarRespuesta,
      () => console.error('ouch')
    );
    console.log('hice el get');
    this.http.get('assets/examplse.json').toPromise()
  }
}
