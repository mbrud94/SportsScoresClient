import { Component, OnInit } from '@angular/core';

import { Competition } from '../../model/competition';
import { CompetitionService } from '../../services/competitions.service';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  competitions : Competition[];
  model: any = {};
  updateMessage : string;
  inProgress = false;

  constructor(private compService : CompetitionService, private adminService : AdminService) { }

  ngOnInit() {
    this.compService.getCompetitions().subscribe(r => this.competitions = r);
  }

  updateCompetition() : void {
    this.updateMessage = null;
    this.inProgress = true;
    this.adminService.updateCompetitionGames(this.model.selectedComp).subscribe(r => {this.updateMessage = r; this.inProgress = false;});
    //console.log(this.model.selectedComp);
  }

}
