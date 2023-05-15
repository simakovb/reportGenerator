import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// app specific
import { MatComponentsModule } from './mat-components/mat-components.module';
import { HomeComponent } from './home/home.component';
import { EmployeeModule } from './employee/employee.module';
import { ExpenseModule} from './expense/expense.module';
import { ReportModule } from './report/report.module';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';

@NgModule({
 imports: [
 BrowserModule,
 AppRoutingModule,
 BrowserAnimationsModule,
 HttpClientModule,
 MatComponentsModule,
 EmployeeModule,
 ExpenseModule,
 ReportModule
 ],
 providers: [],
 bootstrap: [AppComponent],
 declarations: [AppComponent, HomeComponent, DeleteDialogComponent],
})
export class AppModule { }
