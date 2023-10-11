import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../../services/menu.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {

  @ViewChild('menu') menu! : ElementRef;
  isConnected : boolean = false;
  menuShow! : boolean;
  menuSub! : Subscription
  constructor(public router: Router, private menuService : MenuService){
  }

  ngOnInit(): void {
   this.menuSub = this.menuService.menuhidden.subscribe((value: boolean) => {
      this.menuShow = value;
      this.showMenu();
    });
  }

  showMenu(){
    this.menu.nativeElement.classList.toggle('showMenu');
  }

  showMenuSub(){
    this.menuService.menuhidden.next(true);
  }

  ngOnDestroy(): void {
    this.menuSub.unsubscribe();
  }


}
