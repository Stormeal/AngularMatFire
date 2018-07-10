import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule} from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartistModule} from 'ng-chartist';
import { ChartsModule } from 'ng2-charts';

import { Home1Component } from './home1/home1.component';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    ChartistModule,
    ChartsModule,

  ],
  declarations: [ Home1Component ]
})
export class HomeModule { }
