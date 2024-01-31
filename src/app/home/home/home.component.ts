import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormulaComponent } from '../formula/formula.component';
import { FORMULES_MARGIN, FORMULES_WIDTH } from 'src/app/shared/constantes/constantes';
import emailjs from '@emailjs/browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy{

  @ViewChild('formules') formules!: ElementRef;
  @ViewChild('formules2') formules2!: ElementRef;
  @ViewChild('formule1', { read: ElementRef }) formule1!: ElementRef;
  @ViewChild('formule2', { read: ElementRef }) formule2!: ElementRef;
  @ViewChild('formule3', { read: ElementRef }) formule3!: ElementRef;
  @ViewChild('formule4', { read: ElementRef }) formule4!: ElementRef;
  @ViewChild('formule5', { read: ElementRef }) formule5!: ElementRef;
  @ViewChild('formule6', { read: ElementRef }) formule6!: ElementRef;
  @ViewChild('formule7', { read: ElementRef }) formule7!: ElementRef;
  @ViewChild('formule8', { read: ElementRef }) formule8!: ElementRef;
  @ViewChild('flecheg1', { read: ElementRef }) flecheg1!: ElementRef;
  @ViewChild('flecheg2', { read: ElementRef }) flecheg2!: ElementRef;
  @ViewChild('nom', { read: ElementRef }) nom!: ElementRef;
  @ViewChild('prenom', { read: ElementRef }) prenom!: ElementRef;
  @ViewChild('mail', { read: ElementRef }) mail!: ElementRef;
  @ViewChild('message', { read: ElementRef }) message!: ElementRef;
  @ViewChild('formButton', { read: ElementRef }) formButton!: ElementRef;
  @ViewChild('sendNotif', { read: ElementRef }) sendNotif!: ElementRef;
  @ViewChild('failNotif', { read: ElementRef }) failNotif!: ElementRef;



  right = 0;
  divToDuplicate = 1;

  right2 = 0;
  divToDuplicate2 = 1;

  ngOnInit(): void {
  }


  ngAfterViewInit(): void {
    this.appearsWithSmooth();
  }

  addMargeToInfinity(){
    const divToAddMarge = this.formules.nativeElement;
    const formule1 = this.formule1.nativeElement;
    const formule2 = this.formule2.nativeElement;
    const formule4 = this.formule4.nativeElement;
    const formule5 = this.formule5.nativeElement;
    const formule7 = this.formule7.nativeElement;

    // j'ajoute en boucle de la position right

      divToAddMarge.style.right = `${this.right}px`

        // faire la duplication de la bonne div en fonction de divToDuplicate et changer de div à dupliquer
        if(this.divToDuplicate === 1){
          divToAddMarge.appendChild(formule1.cloneNode(true));
          this.divToDuplicate = 2;
        }else if(this.divToDuplicate === 2){
          divToAddMarge.appendChild(formule2.cloneNode(true));
          this.divToDuplicate = 3;
        }else if(this.divToDuplicate === 3){
          divToAddMarge.appendChild(formule4.cloneNode(true));
          this.divToDuplicate = 4;
        }else if(this.divToDuplicate === 4){
          divToAddMarge.appendChild(formule5.cloneNode(true));
          this.divToDuplicate = 5;
        }else if(this.divToDuplicate === 5){
          divToAddMarge.appendChild(formule7.cloneNode(true));
          this.divToDuplicate = 1;
        }

  }

  /**
   * ajoute un position right tous les 250ms
   * duplique 1 élément tous les 300px
   */
  addMargeToInfinity2(){
    const divToAddMarge = this.formules2.nativeElement;
    const formule3 = this.formule3.nativeElement;
    const formule6 = this.formule6.nativeElement;
    const formule8 = this.formule8.nativeElement;

      divToAddMarge.style.right = `${this.right2}px`

        // faire la duplication de la bonne div en fonction de divToDuplicate et changer de div à dupliquer
        if(this.divToDuplicate2 === 1){
          divToAddMarge.appendChild(formule3.cloneNode(true));
          this.divToDuplicate2 = 2;
        }else if(this.divToDuplicate2 === 2){
          divToAddMarge.appendChild(formule6.cloneNode(true));
          this.divToDuplicate2 = 3;
        }else if(this.divToDuplicate2 === 3){
          divToAddMarge.appendChild(formule8.cloneNode(true));
          this.divToDuplicate2 = 1;
        }

  }

  goToNextFormule(){
    const fg1 = this.flecheg1.nativeElement;
    fg1.style.height = '50px';
    this.right += FORMULES_WIDTH + FORMULES_MARGIN;
    this.addMargeToInfinity();

  }

  goToPreviousFormule(){
    const fg1 = this.flecheg1.nativeElement;
    if(this.right >= FORMULES_WIDTH + FORMULES_MARGIN){
      this.right -= FORMULES_WIDTH + FORMULES_MARGIN;
      if(this.right === 0){
        fg1.style.height = '0px';
      }
      this.addMargeToInfinity();
    }
  }

  goToNextFormule2(){
    const fg2 = this.flecheg2.nativeElement;
    fg2.style.height = '50px';
    this.right2 += FORMULES_WIDTH + FORMULES_MARGIN;
    this.addMargeToInfinity2();

  }

 goToPreviousFormule2(){
  const fg2 = this.flecheg2.nativeElement;
  if(this.right2 >= FORMULES_WIDTH + FORMULES_MARGIN){
    this.right2 -= FORMULES_WIDTH + FORMULES_MARGIN;
    if(this.right2 === 0){
      fg2.style.height = '0px';
    }
    this.addMargeToInfinity2();
  }
  }

  /**
   * méthode qui permettra de faire apparaitre les formules + les photo de manière smooth
   */
  appearsWithSmooth(){
    const formules1 = this.formules.nativeElement;
    const formules2 = this.formules2.nativeElement;


  window.addEventListener('scroll', () => {

    const {scrollTop, clientHeight} = document.documentElement;

    const topElementToTopViewport = formules1.getBoundingClientRect().top;
    const topElementToTopViewport2 = formules2.getBoundingClientRect().top;

    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8){
        formules1.classList.add('active')
    }
    if(scrollTop > (scrollTop + topElementToTopViewport2).toFixed() - clientHeight * 0.8){
      formules2.classList.add('active')
  }
})
  }


  sendMail(event : Event){
    event.preventDefault();
    const nom = this.nom.nativeElement.value;
    const prenom = this.prenom.nativeElement.value;
    const mail = this.mail.nativeElement.value;
    const message = this.message.nativeElement.value;

    const templateParams = {
      from_name: `${nom} ${prenom}`,
      message: `${message} envoyé par ${mail}`
  };



  emailjs.send('service_zpu9owq','template_3lq6vzn', templateParams, 'p6T7xer_3LM_gfyT2')
    .then((response) => {
      this.nom.nativeElement.value = '';
      this.prenom.nativeElement.value='';
      this.message.nativeElement.value='';
      this.mail.nativeElement.value='';
      this.sendNotif.nativeElement.classList.toggle('active');

      setTimeout(() => {
        this.sendNotif.nativeElement.classList.toggle('active');

      }, 2000);
    }, (err) => {
      this.failNotif.nativeElement.classList.toggle('active');

      setTimeout(() => {
        this.failNotif.nativeElement.classList.toggle('active');

      }, 2000);    });
  }

  ngOnDestroy(): void {

  }

}


