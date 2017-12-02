import { Injectable } from '@angular/core';
import { Component, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Game } from '../model/game';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import "rxjs/Rx";

@Injectable()
export class GamesService {
    apiUrl: string;

    constructor( @Inject('BASE_URL') baseUrl: string, private http: Http) {
        this.apiUrl = baseUrl + "games";
    }

    getFinishedGames(id: number): Observable<Game[]> {
        return this.http
            .get(this.apiUrl + "/" + id + "/finished")
            .map((response: Response) => {
                return <Game[]>response.json();
            })
    }

    getScheduledGames(id: number): Observable<Game[]> {
        return this.http
            .get(this.apiUrl + "/" + id + "/scheduled")
            .map((response: Response) => {
                return <Game[]>response.json();
            })
    }
}