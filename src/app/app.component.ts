import { Component } from '@angular/core';
import { MenuService } from './shared/services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ask';


  constructor(private menuService : MenuService){
    this.menuService.menuhidden.next(true);
  }
}
