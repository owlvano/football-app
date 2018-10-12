import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _headers = new HttpHeaders().set('X-Auth-Token', '039441a2aed54418a0a05234a1648399');

  constructor(private http: HttpClient) { }

  getAllCompetitions() {
    return this.http.get('http://api.football-data.org/v2/competitions/',
    {'headers': this._headers});
  }

  getMatches(competitionId) {
    return this.http.get('http://api.football-data.org/v2/competitions/' + competitionId + '/matches',
    {'headers': this._headers});
  }
}
