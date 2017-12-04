import { Injectable } from '@angular/core';
import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { Http, Response } from '@angular/http';

@Injectable()
export class AdminService {
  apiUrl: string;

  constructor( @Inject('BASE_URL') baseUrl: string, private http: Http, private authService : AuthService) {
      this.apiUrl = baseUrl + "admin";
  }

  updateCompetitionGames(id : number) : Observable<string> {
    return this.http
      .get(this.apiUrl + "/update/" + id, this.authService.prepareRequestHeader())
      .map((response: Response) => {
        return <string>response.json();
    })
  }

  logout() : void{
    this.authService.logout();
  }

}
