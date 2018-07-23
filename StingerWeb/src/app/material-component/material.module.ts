import 'hammerjs';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { DemoMaterialModule} from '../demo-material-module';
import { CdkTableModule } from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialRoutes } from './material.routing';


import { UsersComponent } from './users/users.component';
import { StingsComponent } from './stings/stings.component';
import { EmployeesComponent } from './employees/employees.component';
import { EditDialogComponent } from './users/edit-dialog/edit-dialog.component';
import { EditComponent } from './employees/edit/edit.component';
import { NotificationMessageComponent } from './notification-message/notification-message.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MatDialogActions } from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ChartistModule} from 'ng-chartist';
import { HomeComponent } from './home/home.component';
import { ReportsComponent } from './reports/reports.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    DemoMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule,
    NgxDatatableModule,
    Ng2SmartTableModule,
    NgxChartsModule,
    ChartistModule
  ],
  providers: [

  ],
  entryComponents: [ EditDialogComponent, EditComponent, NotificationMessageComponent, ],
  declarations: [
    HomeComponent,
    ReportsComponent,
    UsersComponent,
    StingsComponent,
    EmployeesComponent,
    EditDialogComponent,
    EditComponent,
    NotificationMessageComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
})

export class MaterialComponentsModule {}
