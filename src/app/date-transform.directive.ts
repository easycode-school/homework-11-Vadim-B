import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appDateTransform]'
})
export class DateTransformDirective implements OnInit {
    /** Время остановки отсчета */
    private endDate: number;

  @Input() set appDateTransform(endDate: number) {
    this.endDate = endDate;
  }

  constructor(
    private _template: TemplateRef<any>,
    public _container: ViewContainerRef,
  ) { }

  ngOnInit(): void {
    // Иницализируем шаблон для вставки нового элемента
    const view = this._container.createEmbeddedView(this._template);

    // Вывод на экран первоначального значения
    view.rootNodes[0].innerHTML = this._newTemplate(this._parseTime(this._getTimeLeft())); // яйцо в зайце, заяц в утке, утка в шоке!

    // Иницализируем таймер, к-й каждую секунду будет выводить актуальнуе значение
    const timer = setInterval(() => {

      if (this._getTimeLeft() <= 0) {
        return clearInterval(timer);
      }

      view.rootNodes[0].innerHTML = this._newTemplate(this._parseTime(this._getTimeLeft()));
    }, 1000);
  }

  /**
   * Определяем время до остановки счетчика
   * @param endDat - дата/время остановки счетчика
   */
  private _getTimeLeft(): number {
    return (this.endDate - Date.now()) / 1000;
  }

  /**
   * parseTime - метод, который преобразует секунды до окончания челенджа в дни либо формат hh:mm:ss
   * @param timeLeft - секунды до окончания челенджа
   */
  private _parseTime(seconds: number): { count: string; desc: string; } {
    const days = Math.floor(seconds / 86400);
    if (days) {
      return {
        count: days + '',
        desc: 'Days left'
      };
    } else if (seconds <= 0) {
      return {
        count: '',
        desc: 'Time is over'
      };
    }

    const hours = Math.floor(seconds / 3600);
    seconds -= hours * 3600;
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds - minutes * 60);

    return {
      count: `${hours > 9 ? hours : '0' + hours}:${minutes > 9 ? minutes : '0' + minutes}:${seconds > 9 ? seconds : '0' + seconds}`,
      desc: 'Time left'
    };
  }

  /**
   * метод, который генерирует новый темплейт
   * @param count счетчик времени
   * @param desc характеристика счетчика
   */
  private _newTemplate({count, desc}): string {
    return `
    <span class="count" style="font-size: 18px;">${count}</span>
    <span class="desc">${desc}</span>
    `;
  }
}
