import { Component, OnInit, Input } from '@angular/core';
import { Challenge } from '../../interfaces/challenge';

@Component({
  selector: 'app-challenges-item',
  templateUrl: './challenges-item.component.html',
  styleUrls: ['./challenges-item.component.css']
})
export class ChallengesItemComponent implements OnInit {
  @Input() challenge: Challenge;

  public endChallengeDate: number;

  constructor() { }

  // при загрузке компонеты записывем в переменную время окончания соревнования
  ngOnInit() {
    this.endChallengeDate = new Date(this.challenge.end_date).getTime();

    // ? Для проверки, можно присвоить любую дату в this.endChallengeDate
    // const exmplEndChallengeDate = new Date(2019, 2, 4, 20, 0, 0, 0).getTime();
    // this.endChallengeDate = exmplEndChallengeDate;
  }

}
