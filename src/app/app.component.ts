import { Component } from '@angular/core';
import {Gradient} from './Gradient';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'notepadsclient';
  color: Gradient;

  setBoardColor(color){
    this.color = color;
    const container: HTMLElement = document.getElementById('board');
    // tslint:disable-next-line:max-line-length
    container.style.backgroundImage = 'linear-gradient(' + color.direction + ', ' + color.firstColor + ' ' + color.firstPercentage +
      '%, ' + color.secondColor + ' ' + color.secondPercentage + '%)';
  }
}
