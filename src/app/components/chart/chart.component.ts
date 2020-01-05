import { Component, OnInit } from '@angular/core';

import { searchableBigMultipliers } from '../../../assets/searchableBigMultipliers';
import { types } from '../../../assets/types';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

    attackersList = types;
    defendersList = ["flying","normal","fairy","fighting"];
    searchableBigMultipliers = searchableBigMultipliers;

    // For debugging purposes only
    console = console;

    constructor() { }

    ngOnInit() { }

}
