import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.css']
})
export class FormulaComponent {

@Input() titre! : string;
@Input() description! :string

}
