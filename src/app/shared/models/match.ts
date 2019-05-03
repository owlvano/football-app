// Generated by https://quicktype.io
import { Area } from './area';
import { Competition } from './competition';

export interface MatchesData {
    count:       number;
    filters:     MatchFilters;
    competition: Competition;
    matches:     Match[];
}

export interface MatchFilters {
    matchday: string;
    dateFrom: string;
    dateTo: string;
    stage: string;
    status: string;
    group: string;
    season: string;
}

export interface Match {
    id:            number;
    season:        Season;
    utcDate:       string;
    status:        Status;
    attendance:    number;
    matchday:      number;
    stage:         Stage;
    group:         Group;
    lastUpdated:   string;
    homeTeam:      Team;
    awayTeam:      Team;
    score:         Score;
    goals:         Goal[];
    bookings:      Booking[];
    substitutions: Substitution[];
    referees:      Coach[];
}

export interface Team {
    id:      number;
    name:    string;
    coach:   Coach;
    captain: Captain;
    lineup:  Captain[];
    bench:   Captain[];
}

export interface Captain {
    id:          number;
    name:        string;
    position?:   Position;
    shirtNumber: number;
}

export enum Position {
    Attacker = "Attacker",
    Defender = "Defender",
    Goalkeeper = "Goalkeeper",
    Midfielder = "Midfielder",
}

export interface Coach {
    id:              number;
    name:            string;
    countryOfBirth?: string;
    nationality:     string;
}

export interface Booking {
    minute: number;
    team:   Area;
    player: Area;
    card:   Card;
}

export enum Card {
    RedCard = "RED_CARD",
    YellowCard = "YELLOW_CARD",
}

export interface Goal {
    minute: number;
    type:   string;
    team:   Area;
    scorer: Area;
    assist: Area;
}

export enum Group {
    RegularSeason = "Regular Season",
}

export interface Score {
    winner:    Winner;
    duration:  Duration;
    fullTime:  ExtraTime;
    halfTime:  ExtraTime;
    extraTime: ExtraTime;
    penalties: ExtraTime;
}

export enum Duration {
    Regular = "REGULAR",
}

export interface ExtraTime {
    homeTeam: number;
    awayTeam: number;
}

export enum Winner {
    AwayTeam = "AWAY_TEAM",
    Draw = "DRAW",
    HomeTeam = "HOME_TEAM",
}

export interface Season {
    id:              number;
    startDate:       string;
    endDate:         string;
    currentMatchday: number;
}

export enum Stage {
    RegularSeason = "REGULAR_SEASON",
}

export enum Status {
    Finished = "FINISHED",
}

export interface Substitution {
    minute:    number;
    team:      Area;
    playerOut: Area;
    playerIn:  Area;
}
