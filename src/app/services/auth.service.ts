import { Injectable } from '@angular/core';
import { Component, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import "rxjs/Rx";
import { Router } from '@angular/router';

@Injectable()
export class AuthService{
    apiUrl: string;
    //token: string;

    constructor( @Inject('BASE_URL') baseUrl: string, private http: Http, private router : Router) {
        this.apiUrl = baseUrl + "admin";
    }

    loginAsAdmin(pass: string) : Observable<any> {
        return this.http.get(this.apiUrl + '/gettoken/' + pass)
        .map((response: Response) => {
            //this.token = response.json();  
            localStorage.setItem('admin', response.json()); 
            //console.log(this.token);        
        });
    }

    logout(): void {
        this.router.navigate(['/login']);
        localStorage.removeItem('admin');
    }

    isAuthenticated(): boolean{
        //console.log("auth check");
        return localStorage.getItem("admin") ? true : false;
    }

    prepareRequestHeader() : RequestOptions {
        let headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem("admin") });
        let options = new RequestOptions({ headers: headers });
        return options;
    }
}