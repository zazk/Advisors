import { Component } from '@angular/core';

/*
  Generated class for the Checkbox component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'checkbox',
  templateUrl: 'checkbox.html'
})
export class CheckboxComponent {

  text: string;

  constructor() {
    console.log('Hello Checkbox Component');
    this.text = 'Hello World';
  }

}
