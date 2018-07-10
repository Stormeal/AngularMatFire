import { Component, AfterViewInit, ViewChild } from '@angular/core';
import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from 'ng-chartist';

import * as shape from 'd3-shape';
import { single, multi, generateData } from './chartData';
import { colorSets } from '@swimlane/ngx-charts/release/utils/color-sets';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

 


  ngAfterViewInit() {
    const sparklineLogin = function () {
      // spark count
      (<any>$('.spark-count')).sparkline(
        [4, 5, 0, 10, 9, 12, 4, 9, 4, 5, 3, 10, 9, 12, 10, 9, 12, 4, 9],
        {
          type: 'bar',
          width: '100%',
          height: '70',
          barWidth: '2',
          resize: true,
          barSpacing: '6',
          barColor: 'rgba(255, 255, 255, 0.3)'
        }
      );
      // site A
      (<any>$('.sitea')).sparkline([2, 4, 4, 6, 8, 5, 6, 4, 8, 6, 6, 2], {
        type: 'line',
        width: '90%',
        height: '50',
        lineColor: '#26c6da',
        fillColor: '#26c6da',
        maxSpotColor: '#26c6da',
        highlightLineColor: 'rgba(0, 0, 0, 0.2)',
        highlightSpotColor: '#26c6da'
      });
      // site B
      (<any>$('.siteb')).sparkline([2, 4, 4, 6, 8, 5, 6, 4, 8, 6, 6, 2], {
        type: 'line',
        width: '90%',
        height: '50',
        lineColor: '#1e88e5',
        fillColor: '#1e88e5',
        maxSpotColor: '#1e88e5',
        highlightLineColor: 'rgba(0, 0, 0, 0.2)',
        highlightSpotColor: '#1e88e5'
      });
      // site C
      (<any>$('.sitec')).sparkline([2, 4, 4, 6, 8, 5, 6, 4, 8, 6, 6, 2], {
        type: 'line',
        width: '90%',
        height: '50',
        lineColor: '#f86c6b',
        fillColor: '#f86c6b',
        maxSpotColor: '#f86c6b',
        highlightLineColor: 'rgba(0, 0, 0, 0.2)',
        highlightSpotColor: '#f86c6b'
      });
    };
    let sparkResize;
    (<any>$(window)).resize(function (e) {
      clearTimeout(sparkResize);
      sparkResize = setTimeout(sparklineLogin, 500);
    });
    sparklineLogin();

  }
}
