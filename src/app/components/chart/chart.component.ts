import { Component, OnInit } from '@angular/core';

import { bigMultipliers } from '../../../assets/bigMultipliers';
import { objectMultipliers } from '../../../assets/objectMultipliers';
import { arrayMultipliers } from '../../../assets/arrayMultipliers';
import { types } from '../../../assets/types';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

    types = types;
    bigMultipliers = bigMultipliers;
    objectMultipliers = objectMultipliers;
    arrayMultipliers = arrayMultipliers;

    constructor() { }

    ngOnInit() {
        // Way too crazy
        // for(var i=0;i<damageFactors.length; i++){
        //     for(var k=0;k<damageFactors[i].attackerFactors.length;k++){
        //         console.log(damageFactors[i].attackerFactors[k].attackerType);
        //     }
        // };
    }

}
