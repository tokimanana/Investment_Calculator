import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { HeaderComponent } from './header/header.component';
import { UserInputModule } from './user-input/user-input.model';

@NgModule({
  declarations: [AppComponent, HeaderComponent, InvestmentResultsComponent],
  imports: [BrowserModule, UserInputModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
