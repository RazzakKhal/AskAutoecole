import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormulaComponent } from '../formula/formula.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy{

  @ViewChild('formules') formules!: ElementRef;
  @ViewChild('formule1', { read: ElementRef }) formule1!: ElementRef;
  @ViewChild('formule2', { read: ElementRef }) formule2!: ElementRef;
  @ViewChild('formule3', { read: ElementRef }) formule3!: ElementRef;

  timeOut : any;

  ngOnInit(): void {
  }


  ngAfterViewInit(): void {
    console.log(this.formules.nativeElement.offsetTop);
    this.addMargeToInfinity();

  }

  addMargeToInfinity(){
    const divToAddMarge = this.formules.nativeElement;
    const formule1 = this.formule1.nativeElement;
    const formule2 = this.formule2.nativeElement;
    const formule3 = this.formule3.nativeElement;
    console.log(formule1)
    let right = 0;
    let countOfDuplication = 0;
    let divToDuplicate = 1;


    // j'ajoute en boucle de la position right
      this.timeOut = setInterval(() => {
      divToAddMarge.style.right = `${right}px`
      right += 10;
      countOfDuplication += 1;

      if(countOfDuplication === 30){
        console.log('hey')
        // faire la duplication de la bonne div en fonction de divToDuplicate et changer de div à dupliquer
        if(divToDuplicate === 1){
          divToAddMarge.appendChild(formule1.cloneNode(true));
          divToDuplicate = 2;
        }else if(divToDuplicate === 2){
          divToAddMarge.appendChild(formule2.cloneNode(true));
          divToDuplicate = 3;
        }else{
          divToAddMarge.appendChild(formule3.cloneNode(true));
          divToDuplicate = 1;
        }
        countOfDuplication = 0;
      }

    }, 500)

    // si la div 1 n'est plus visible, je la duplique et l'ajoute en enfant à ma div formules
    // tous les 400 px je vais devoir ajouter une duplication

  }

  ngOnDestroy(): void {
    clearInterval(this.timeOut);
  }

}


