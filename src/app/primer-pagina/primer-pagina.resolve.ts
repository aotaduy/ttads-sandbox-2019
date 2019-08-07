import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';
import {catchError, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PrimerPaginaResolver implements Resolve<Observable<any>> {

  constructor(
    private httpClient: HttpClient
  ) { }

  resolve(route: ActivatedRouteSnapshot, rstate: RouterStateSnapshot): Observable<any> {
    return this.httpClient.get('https://conduit.productionready.io/api/articles');
  }

}
