import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';

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
  unTexto: any = 'hola';
  persona: any = {};
  formControl = new FormControl('prueba');
  profileForm = new FormGroup({
    firstName: new FormControl('', [this.createCustomValidator()]),
    lastName: new FormControl('', Validators.maxLength(10)),
    email: new FormControl('', [Validators.required, Validators.email]),
  }, [Validators.required]);

  onFirstPlusClicked(value) {
    this.countedValue = value;
  }

  createCustomValidator() {
    return (control: AbstractControl) => {
      if (control.value.startsWith('_')) {
        return null;
      }
      return {empiezaGuionBajo: true};
    };
  }
  ngOnInit() {
  }
  setAndresName() {
    this.formControl.setValue('Hola soy andres');
  }

  onSubmit() {
    console.log(this.profileForm.value);
  }

  setFirstName() {
    this.profileForm.patchValue({ firstName: 'Andres'});
  }
}
