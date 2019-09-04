import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordValidatorService {

  constructor() { }

  validate(password: string) {
    return  this.checkLength(password) &&
            this.checkUpperCase(password) &&
            this.checkLowerCase(password);
  }

  private checkLength(password: string) {
    return password.length >= 8;
  }

  private checkLowerCase(password: string) {
    return this.checkRegexp(password, '.*[a-z].*');
  }

  private checkRegexp(password: string, regexp: string) {
    return password.match(regexp) !== null;
  }

  private checkUpperCase(password: string) {
    return this.checkRegexp(password, '.*[A-Z].*');
  }
}
