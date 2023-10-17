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
  @ViewChild('formule4', { read: ElementRef }) formule4!: ElementRef;
  @ViewChild('formule5', { read: ElementRef }) formule5!: ElementRef;
  @ViewChild('formule6', { read: ElementRef }) formule6!: ElementRef;
  @ViewChild('formule7', { read: ElementRef }) formule7!: ElementRef;
  @ViewChild('formule8', { read: ElementRef }) formule8!: ElementRef;



  timeOut : any;
  right = 0;
  countOfDuplication = 0;
  divToDuplicate = 1;

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
    const formule4 = this.formule4.nativeElement;
    const formule5 = this.formule5.nativeElement;
    const formule6 = this.formule6.nativeElement;
    const formule7 = this.formule7.nativeElement;
    const formule8 = this.formule8.nativeElement;

    // j'ajoute en boucle de la position right
      this.timeOut = setInterval(() => {
      divToAddMarge.style.right = `${this.right}px`
      this.right += 10;
      this.countOfDuplication += 1;

      if(this.countOfDuplication >= 30){
        // faire la duplication de la bonne div en fonction de divToDuplicate et changer de div à dupliquer
        if(this.divToDuplicate === 1){
          divToAddMarge.appendChild(formule1.cloneNode(true));
          this.divToDuplicate = 2;
        }else if(this.divToDuplicate === 2){
          divToAddMarge.appendChild(formule2.cloneNode(true));
          this.divToDuplicate = 3;
        }else if(this.divToDuplicate === 3){
          divToAddMarge.appendChild(formule3.cloneNode(true));
          this.divToDuplicate = 4;
        }else if(this.divToDuplicate === 4){
          divToAddMarge.appendChild(formule4.cloneNode(true));
          this.divToDuplicate = 5;
        }else if(this.divToDuplicate === 5){
          divToAddMarge.appendChild(formule5.cloneNode(true));
          this.divToDuplicate = 6;
        }else if(this.divToDuplicate === 6){
          divToAddMarge.appendChild(formule6.cloneNode(true));
          this.divToDuplicate = 7;
        }else if(this.divToDuplicate === 7){
          divToAddMarge.appendChild(formule7.cloneNode(true));
          this.divToDuplicate = 8;
        }else if(this.divToDuplicate === 8){
          divToAddMarge.appendChild(formule8.cloneNode(true));
          this.divToDuplicate =1;
        }
        this.countOfDuplication = 0;
      }

    }, 250)

    // si la div 1 n'est plus visible, je la duplique et l'ajoute en enfant à ma div formules
    // tous les 400 px je vais devoir ajouter une duplication

  }

  goToNextFormule(){
    this.right += 300;
    this.countOfDuplication = 30;
    if(!this.timeOut){
      this.addMargeToInfinity();
    }
  }

  stopMoving(){
    clearInterval(this.timeOut);
    this.timeOut = undefined;
  }

  ngOnDestroy(): void {
    clearInterval(this.timeOut);
  }

}


