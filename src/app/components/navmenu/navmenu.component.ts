import { Component, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { Competition } from '../../model/competition';
import { CompetitionService } from '../../services/competitions.service';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent implements OnInit {
    competitions: Competition[];

    constructor(private competitionService: CompetitionService) { }

    ngOnInit(): void {
        this.competitionService.getCompetitions().subscribe(c => this.competitions = c);
    }

}




