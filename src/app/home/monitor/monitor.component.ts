import { AfterViewChecked, AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements AfterViewInit{

  @ViewChild('soso') soso! : ElementRef;
  @ViewChild('papa') papa! : ElementRef;

  ngAfterViewInit(): void {
    this.appearsWithSmooth();
  }
    /**
   * méthode qui permettra de faire apparaitre les formules + les photo de manière smooth
   */
    appearsWithSmooth(){
      const soso = this.soso.nativeElement;
      const papa = this.papa.nativeElement;


    window.addEventListener('scroll', () => {

      const {scrollTop, clientHeight} = document.documentElement;

      // console.log(scrollTop, clientHeight);

      const topElementToTopViewport = soso.getBoundingClientRect().top;
      const topElementToTopViewport2 = papa.getBoundingClientRect().top;

      if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8){
          soso.classList.add('active2')
      }
      if(scrollTop > (scrollTop + topElementToTopViewport2).toFixed() - clientHeight * 0.8){
        papa.classList.add('active')
    }
  })
    }

}
