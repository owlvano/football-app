import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  private _competitionId: number;
  matchesData$: Object;

  constructor(private data: DataService, private route: ActivatedRoute) { 
    this.route.params.subscribe(
      params => this._competitionId = params.id
    );
  }

  ngOnInit() {
    this.data.getMatches(this._competitionId).subscribe(
      data => this.matchesData$ = data
    );
  }

}
