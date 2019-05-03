import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CompetitionsData, MatchesData } from '../models';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _headers = new HttpHeaders().set('X-Auth-Token', '039441a2aed54418a0a05234a1648399');

  constructor(private http: HttpClient) { }

  getAllCompetitions() {
    return this.http.get<CompetitionsData>('http://api.football-data.org/v2/competitions/',
    {'headers': this._headers});
  }

  getMatches(competitionId: number) {
    return this.http.get<MatchesData>(`http://api.football-data.org/v2/competitions/${competitionId}/matches`,
    {'headers': this._headers});
  }
}
