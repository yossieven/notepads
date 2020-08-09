import { Component, OnInit } from '@angular/core';
import {Gradient} from '../Gradient';
// @ts-ignore
import * as colors from '../colors.json';

@Component({
  selector: 'app-pallet',
  templateUrl: './pallet.component.html',
  styleUrls: ['./pallet.component.css']
})
export class PalletComponent implements OnInit {
  pallet: Array<Gradient> = [];
  palletStr: Array<string> = [];
  gradientStr = '';

  constructor() {
    console.log((colors as any).default);
    for (const color of (colors as any).default) {
      this.pallet.push(color);
      // tslint:disable-next-line:max-line-length
      this.gradientStr = 'linear-gradient(' + color.direction + ',' + color.firstColor + ' ' + color.firstPercentage + '%, ' + color.secondColor + ' ' + color.secondPercentage + '%)';
      console.log('the color ', this.gradientStr);
      this.palletStr.push(this.gradientStr);
    }
    console.log('pallet: ', this.pallet);
  }

  ngOnInit(): void {

  }

}
