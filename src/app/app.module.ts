import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { MatchesComponent } from './matches/matches.component';

import { HttpClientModule } from '@angular/common/http';
import { IdsFilterPipe } from './ids-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CompetitionsComponent,
    MatchesComponent,
    IdsFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
