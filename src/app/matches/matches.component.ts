import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchesData } from '../shared/models';
import { DataService } from '../shared/services';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  private _competitionId: number;
  matchesData: MatchesData;

  constructor(private data: DataService, private route: ActivatedRoute) { 
    this.route.params.subscribe(
      params => this._competitionId = params.id
    );
  }

  ngOnInit() {
    this.data.getMatches(this._competitionId).subscribe(
      data => this.matchesData = data
    );
  }

}
