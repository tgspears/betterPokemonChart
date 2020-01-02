import { Component, OnInit } from '@angular/core';

import { bigMultipliers } from '../../../assets/bigMultipliers';
import { objectMultipliers } from '../../../assets/objectMultipliers';
import { arrayMultipliers } from '../../../assets/arrayMultipliers';
import { attackerOrder, defenderOrder } from '../../../assets/typeOrders';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

    attackerOrder = attackerOrder;
    defenderOrder = defenderOrder;
    bigMultipliers = bigMultipliers;
    objectMultipliers = objectMultipliers;
    arrayMultipliers = arrayMultipliers;

    // For debugging purposes only
    console = console;

    constructor() { }

    ngOnInit() {
    }

}
