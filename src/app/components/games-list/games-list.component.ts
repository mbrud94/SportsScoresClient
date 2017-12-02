import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GamesService } from "../../services/games.service"
import { Game } from "../../model/game"

@Component({
  selector: 'games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {
  id: number;
  games: Game[];
  @Input() gamesStatus: string

  constructor(private gamesService: GamesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if(this.gamesStatus == "Scheduled") {
        this.loadScheduledGames();
      } else if (this.gamesStatus == "Finished") {
        this.loadFinishedGames();
      }
    });
    //console.log(this.gamesStatus);
  }

  loadFinishedGames(): void {
    this.gamesService.getFinishedGames(this.id).subscribe(r => {
      this.games = r;
      //this.games.sort((g2, g1) => g2.matchDate.getTime() - g1.matchDate.getTime());
      // this.gamesByMatchDay = new Map<number, Game[]>();
      // r.forEach(g => {
      //   if(this.gamesByMatchDay[g.matchDay] == null) {
      //     this.gamesByMatchDay[g.matchDay] = new Array<Game>();
      //   }
      //   this.gamesByMatchDay[g.matchDay].push(g);  
      // });
      //this.matchDays = this.gamesByMatchDay.keys();
      //console.log(this.matchDays);
      //console.log(this.gamesByMatchDay.keys());
    });
  }

  loadScheduledGames(): void {
    this.gamesService.getScheduledGames(this.id)
      .subscribe(r => { 
        this.games = r;
        //this.games.sort((g2, g1) => g2.matchDate.getTime() - g1.matchDate.getTime());
      });
  }
}  

