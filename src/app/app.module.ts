import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { CompDetailsComponent } from './components/compdetails/compdetails.component';

import { CompetitionService } from './services/competitions.service';
import { TablesService } from './services/tables.service';
import { CompetitionTableComponent } from './components/competition-table/competition-table.component';
import { GamesService } from './services/games.service';
import { GamesListComponent } from './components/games-list/games-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavMenuComponent,
    CompDetailsComponent,
    CompetitionTableComponent,
    GamesListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'compdetail/:id', component: CompDetailsComponent },
        { path: '**', redirectTo: 'home' }
    ])
  ],
  providers: [
    CompetitionService, 
    TablesService,
    GamesService,
    { provide: 'BASE_URL', useFactory: getBaseUrl2 }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getBaseUrl2() {
  return "http://sportsscoresapi.azurewebsites.net/api/";
}
