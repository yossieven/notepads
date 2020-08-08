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

  constructor() {
    console.log((colors as any).default);
    for (let color of (colors as any).default) {
      this.pallet.push(color);
    }
    console.log('pallet: ', this.pallet);
  }

  ngOnInit(): void {

  }

}
