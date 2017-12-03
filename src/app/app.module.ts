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
import { AuthService } from './services/auth.service';
import { GamesListComponent } from './components/games-list/games-list.component';
import { LoginComponent } from './components/login/login.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AuthGuard } from './services/auth-guard.service';
import { AdminService } from './services/admin.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavMenuComponent,
    CompDetailsComponent,
    CompetitionTableComponent,
    GamesListComponent,
    LoginComponent,
    AdminPanelComponent
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
        { path: 'login', component: LoginComponent },
        { path: 'compdetail/:id', component: CompDetailsComponent },
        { path: 'admin', component: AdminPanelComponent, canActivate: [AuthGuard] },
        { path: '**', redirectTo: 'home' }
    ])
  ],
  providers: [
    CompetitionService, 
    TablesService,
    GamesService,
    AuthService,
    AdminService,
    AuthGuard,
    { provide: 'BASE_URL', useFactory: getBaseUrl2 }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getBaseUrl2() {
  return "http://sportsscoresapi.azurewebsites.net/api/";
}
