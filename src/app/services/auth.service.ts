import { Injectable } from '@angular/core';
import { Component, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import "rxjs/Rx";

@Injectable()
export class AuthService{
    apiUrl: string;
    token: string;

    constructor( @Inject('BASE_URL') baseUrl: string, private http: Http) {
        this.apiUrl = baseUrl + "admin";
    }

    loginAsAdmin(pass: string) : Observable<any> {
        return this.http.get(this.apiUrl + '/gettoken/' + pass)
        .map((response: Response) => {
            this.token = response.json();  
            localStorage.setItem('admin', this.token); 
            //console.log(this.token);        
        });
    }

    logout(): void {
        this.token = null;
        localStorage.removeItem('admin');
    }

    isAuthenticated(): boolean{
        return localStorage.getItem("admin") ? true : false;
    }
}