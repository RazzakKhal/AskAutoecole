import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FORMULES_WIDTH } from 'src/app/shared/constantes/constantes';

@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.css']
})
export class FormulaComponent implements AfterViewInit{


@Input() titre! : string;
@Input() description! :string[]
@ViewChild('formule1') formule! : ElementRef;

ngAfterViewInit(): void {
  const formules = this.formule.nativeElement;
  formules.style.width = FORMULES_WIDTH + 'px';
}

}
