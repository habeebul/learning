import { AfterViewChecked, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewChecked  {
  title = 'view-child-decorator';
  @ViewChild('h1Element')
  ele!: ElementRef;
  ngAfterViewChecked(){
    console.log(this.ele.nativeElement)
  }
}
