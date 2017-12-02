import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { TableRow } from '../../model/tablerow';
import { TablesService } from '../../services/tables.service';

@Component({
  selector: 'competition-table',
  templateUrl: './competition-table.component.html',
  styleUrls: ['./competition-table.component.css']
})
export class CompetitionTableComponent implements OnInit {
  id: number;
  tableRows: TableRow[];
  tableMode = "general";
 
  constructor(private route: ActivatedRoute, private router: Router, private tablesService: TablesService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.initialiseState();
    });


  }

  initialiseState(): void {
    //console.log(this.id);
    this.loadFullTable();
  }

  loadFullTable(): void {
    this.tableRows = null;
    this.tablesService.getFullTable(this.id).subscribe(t => this.tableRows = t);
  }

  loadAwayTable(): void {
    this.tableRows = null;
    this.tablesService.getAwayTable(this.id).subscribe(t => this.tableRows = t);
  }

  loadHomeTable(): void {
    this.tableRows = null;
    this.tablesService.getHomeTable(this.id).subscribe(t => this.tableRows = t);
  }

}
