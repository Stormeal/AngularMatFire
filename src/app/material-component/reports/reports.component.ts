import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from 'ng-chartist/dist/chartist.component';
declare var require: any;

const data: any = require('./data.json');

export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
}

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})


export class ReportsComponent implements AfterViewInit {

  // Barchart
  barChart1: Chart = {
    type: 'Bar',
    data: data['Bar'],
    options: {
      seriesBarDistance: 15,
      high: 12,

      axisX: {
        showGrid: false, offset: 20
      },
      axisY: {
        showGrid: true, offset: 40
      }
    },

    responsiveOptions: [
      [
        'screen and (min-width: 640px)',
        {
          axisX: {
            labelInterpolationFnc: function (value: number, index: number): string {
              return index % 1 === 0 ? `${value}` : null;
            }
          }
        }
      ]
    ]
  };

  // Doughnut
  public doughnutChartLabels: string[] = [
    'Desktop',
    'Mobile',
    'Tablet'
  ];
  public doughnutChartOptions: any = {
    responsive: false
  };

  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType: string = 'doughnut';
  public doughnutChartLegend: boolean = false;

  ngAfterViewInit() {
    //Sparkline chart
    var sparklineLogin = function () {
      // spark count
      (<any>$('.spark-count')).sparkline([4, 5, 0, 10, 9, 12, 4, 9, 4, 5, 3, 10, 9, 12, 10, 9, 12, 4, 9], {
        type: 'bar'
        , width: '100%'
        , height: '70'
        , barWidth: '2'
        , resize: true
        , barSpacing: '6'
        , barColor: 'rgba(255, 255, 255, 0.3)'
      });

    }
    var sparkResize;
    (<any>$(window)).resize(function (e) {
      clearTimeout(sparkResize);
      sparkResize = setTimeout(sparklineLogin, 500);
    });
    sparklineLogin();
  }
}

