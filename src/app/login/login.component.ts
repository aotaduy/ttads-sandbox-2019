import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  error: any = null;
  loginResponse: any;
  title: any;
  body: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  onLogin() {
    this.error = null;
    this.httpClient.post('https://conduit.productionready.io/api/users/login',
      {
        user: {
          email: this.email,
          password: this.password
        }
      }
      ).subscribe(response => this.loginResponse = response,
      (errorResponse) => this.error = errorResponse);
  }

  onArticleSubmit() {
    const headers = new HttpHeaders({authorization: 'Token ' + this.loginResponse.user.token});
    this.httpClient.post('https://conduit.productionready.io/api/articles',
      {
        article: {
          title: this.title,
          description: 'Powered by TTADS ',
          body: this.body,
          tagList: ['ttads', 'angular']
        }
      },
      {headers: headers}
    ).subscribe(response => this.loginResponse = response,
      (errorResponse) => this.error = errorResponse
  );
  }

}
