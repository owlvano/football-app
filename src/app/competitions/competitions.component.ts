import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css']
})
export class CompetitionsComponent implements OnInit {

  availableCompetitionIds = [2000, 2001, 2002, 2003, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2021];
  competitionsData$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getAllCompetitions().subscribe(
      data =>  this.competitionsData$ = data
    );

    // availableCompetitions$: Object;
    // const competitionsJSON = JSON.stringify(this.competitionsData)['competitions'];
    // this.availableCompetitions$ = competitionsJSON.filter(competition => this._availableCompetitionIds.includes(competition.id));
  }

}
