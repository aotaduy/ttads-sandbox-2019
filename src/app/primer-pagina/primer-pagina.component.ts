import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {MovieService} from '../movies/movie.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-primer-pagina',
  templateUrl: './primer-pagina.component.html',
  styleUrls: ['./primer-pagina.component.less']
})
export class PrimerPaginaComponent implements OnInit {
   articles: any[];
  unTexto: any;

  constructor(
    private router: Router,
    private auth: AuthService,
    private httpClient: HttpClient,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.data.subscribe(data => this.articles = data.articles.articles);
  }

  onButtonClicked() {
    this.router.navigate(['segunda-pagina', Math.random()]);
  }

  onLoginClicked() {
    this.auth.isLoggedIn = true;
    alert('bienvenido!');
  }
}
