import { Component, OnInit } from '@angular/core';

import { Competition } from '../../model/competition';
import { CompetitionService } from '../../services/competitions.service';

@Component({
  selector: 'admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  competitions : Competition[];
  model: any = {};

  constructor(private compService : CompetitionService) { }

  ngOnInit() {
    this.compService.getCompetitions().subscribe(r => this.competitions = r);
  }

  updateCompetition() : void{
    console.log(this.model.selectedComp);
  }

}
