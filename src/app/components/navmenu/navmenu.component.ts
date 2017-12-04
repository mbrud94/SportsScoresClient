import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';

import { Competition } from '../../model/competition';
import { CompetitionService } from '../../services/competitions.service';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class NavMenuComponent implements OnInit {
    competitions: Competition[];

    constructor(private competitionService: CompetitionService, private authService : AuthService) { }

    ngOnInit(): void {
        this.competitionService.getCompetitions().subscribe(c => this.competitions = c);
    }

}




