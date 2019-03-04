import { Component, OnInit } from '@angular/core';
import { ChallengesService } from '../../services/challenges.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-challenges-page',
  templateUrl: './challenges-page.component.html',
  styleUrls: ['./challenges-page.component.css']
})
export class ChallengesPageComponent implements OnInit {
  // по умолчанию сразу будут грузится открытые соревнования, соответствующий таб юудет активен
  public challengesParams = {
    isActive: '1',
    isClosed: '0'
  };
  public tabActive = 'open';

  public challenges;

  constructor(
    private challengesService: ChallengesService,
    private messageService: MessageService
  ) { }

  /**
   *
   */
  ngOnInit() {
    this.getChallenges();
  }

  /**
   * changeParam
   * 1. меняет параметры запроса на сервер
   * 2. активирует соответвующий в разметке таб
   * 3. вызываем метод для получения списка соревнований
   * @param isActive - закрыто ли соревнование
   * @param isClosed - активно ли соревнование
   * @param tabActive - активный таб
   */
  public changeParam(isActive: string, isClosed: string, tabActive: string) {
    this.challengesParams = {isActive, isClosed};
    this.tabActive = tabActive;

    this.getChallenges();
  }

  /**
   * getChallenges - метод для получения списка соревнований
   * 1. Вызывает метод из сервиса для отправки запроса к api с заданными параметрами для получения определенных соревнований
   * 2. Если api вернуло список соревнований, записываем их в публичную переменную,
   * 3. Если ошибка, выводим сообщение о ней
   */
  public getChallenges() {
    this.challengesService.getChallenges(this.challengesParams).subscribe(
      (challenges) => {
        this.challenges = challenges;
      },
      (err) => {

        this.messageService.add({
          severity: 'error',
          summary: 'Server error',
          detail: err.message});
      }
    );
  }
}
