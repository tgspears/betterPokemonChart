import { Component, OnInit } from '@angular/core';

import { searchableBigMultipliers } from '../../../assets/searchableBigMultipliers';
import { attackerTypes } from '../../../assets/types';
import { defenderTypes } from '../../../assets/types';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

    attackersList = attackerTypes;
    defendersList = defenderTypes;
    searchableBigMultipliers = searchableBigMultipliers;

    calculateMultipliers = function(attackerType:string, defenderType1:string, defenderType2?:string){
        var multiplier1:number,
            multiplier2:number;

        multiplier1 = searchableBigMultipliers[defenderType1][attackerType];

        if(defenderType2){
            multiplier2 = searchableBigMultipliers[defenderType2][attackerType];
        } else { multiplier2 = 100 };

        return ((multiplier1/100)*(multiplier2/100));
    }

    // For debugging purposes only
    console = console;

    constructor() { }

    ngOnInit() { }

}
