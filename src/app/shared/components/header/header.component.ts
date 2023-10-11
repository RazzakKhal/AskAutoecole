import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { Element } from '@angular/compiler';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  menuSub! : Subscription;
  menuHidden! : boolean;
  @ViewChild('span1') barre1! : ElementRef;
  @ViewChild('span2') barre2! : ElementRef;
  @ViewChild('span3') barre3! : ElementRef;
  @ViewChild('buttonDiv') buttonDiv! : ElementRef;

  constructor(private menuService : MenuService){
  }

  ngOnInit(): void {
   this.menuSub = this.menuService.menuhidden.subscribe((data: boolean) => {
      this.menuHidden = data;
      this.changeCross();
    })

  }


  hiddenMenu(){
    // changement de la forme du bouton de menu
     this.menuHidden === true ? this.menuService.menuhidden.next(false) : this.menuService.menuhidden.next(true);
    }

  changeCross(){
         // acceder aux span du button, modifier leur forme
         this.barre1.nativeElement.classList.toggle("rotateBarre");
         this.barre3.nativeElement.classList.toggle("clearOpacity");
         this.buttonDiv.nativeElement.classList.toggle('crossRotate');

  }
    ngOnDestroy(): void {
      this.menuSub.unsubscribe();
    }

}
