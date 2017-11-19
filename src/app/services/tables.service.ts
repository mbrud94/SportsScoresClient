import { Injectable } from '@angular/core';
import { Component, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';

import { TableRow } from '../model/tablerow';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import "rxjs/Rx";

@Injectable()
export class TablesService {
    apiUrl: string;

    constructor( @Inject('BASE_URL') baseUrl: string, private http: Http) {
        this.apiUrl = baseUrl + "tables";
    }

    getFullTable(id: number): Observable<TableRow[]> {
        return this.http
            .get(this.apiUrl + "/" + id)
            .map((response: Response) => {
                return <TableRow[]>response.json();
            })
    }

    getAwayTable(id: number): Observable<TableRow[]> {
        return this.http
            .get(this.apiUrl + "/" + id + "/away")
            .map((response: Response) => {
                return <TableRow[]>response.json();
            })
    }

    getHomeTable(id: number): Observable<TableRow[]> {
        return this.http
            .get(this.apiUrl + "/" + id + "/home")
            .map((response: Response) => {
                return <TableRow[]>response.json();
            })
    }
}