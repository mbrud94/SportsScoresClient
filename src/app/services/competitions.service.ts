import { Injectable } from '@angular/core';
import { Component, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Competition } from '../model/competition';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import "rxjs/Rx";

@Injectable()
export class CompetitionService {
    apiUrl: string;

    constructor( @Inject('BASE_URL') baseUrl: string, private http : Http) {
        this.apiUrl = baseUrl + "competitions";
    }

    getCompetitions(): Observable<Competition[]> {
        return this.http
            .get(this.apiUrl)
            .map((response: Response) => {
                return <Competition[]>response.json();
            })
    }
}