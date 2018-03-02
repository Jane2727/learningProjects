import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tower',
  templateUrl: 'tower.component.html',
  styleUrls: ['tower.component.css'],
  moduleId: module.id
})

export class TowerComponent  implements OnInit{
  @Input() tower;

  overWeight: boolean;
  overLevel: boolean;
  greenHeight: number;
  greenY: number;
  
  ngOnInit () {
    this.setIndicatorColor();
    this.calculateHeight();
};

setIndicatorColor() {  
    if (this.tower.weight.maxValue -  this.tower.weight.value < 0) {
      this.overWeight = true;
    } else if (this.tower.level.maxValue -  this.tower.level.value < 0) {
      this.overLevel = true;
    }
 };

 calculateHeight() {
   if (this.tower.level.value > 99) {
    this.greenHeight = 385;
    this.greenY = 12;
   } else {
    this.greenHeight = 3.85 * this.tower.level.value;
    this.greenY = 397 - this.greenHeight;
   }
  }

}