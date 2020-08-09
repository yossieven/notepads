import {Component, OnInit, Output, EventEmitter} from '@angular/core';
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
  @Output() colored = new EventEmitter<Gradient>();

  constructor() {
    console.log((colors as any).default);
    for (const color of (colors as any).default) {
      this.pallet.push(color);
      console.log('the color ', this.pallet);
      this.palletStr.push(this.gradientStr);
    }
    console.log('pallet: ', this.pallet);
  }

  ngOnInit(): void {

  }

  changeBackground(color){
    this.colored.emit(color);
  }
}
