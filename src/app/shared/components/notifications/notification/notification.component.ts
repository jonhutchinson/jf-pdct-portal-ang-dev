import { ComponentWithSelfDestroy, Notification } from '../notification.models';
import { Component, EventEmitter, Output, OnDestroy, Input } from '@angular/core';
import { animate, sequence, style, transition, trigger, AnimationEvent } from '@angular/animations';

@Component({
  selector: 'j-notification-item',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  animations: [
    trigger('anim', [
      transition('* => void', [
        style({ height: '*', opacity: '1', transform: 'translateX(0)' }),
        sequence([
          animate('.25s ease', style({ height: '*', opacity: '.2', transform: 'translateX(20px)' })),
          animate('.1s ease', style({ height: '0', opacity: 0, transform: 'translateX(20px)' }))
        ])
      ]),
      transition('void => active', [
        style({ height: '0', opacity: '0', transform: 'translateX(20px)' }),
        sequence([
          animate('.1s ease', style({ height: '*', opacity: '.2', transform: 'translateX(20px)' })),
          animate('.35s ease', style({ height: '*', opacity: 1, transform: 'translateX(0)' }))
        ])
      ])
    ])
  ]
})
export class NotificationItemComponent implements OnDestroy, ComponentWithSelfDestroy {
  active = true;
  time!: number;
  timer!: number;
  @Input() notification: Notification = {} as Notification;
  @Output() selfDestroy: EventEmitter<null> = new EventEmitter();
  @Output() action: EventEmitter<Notification> = new EventEmitter();

  closeAfter(time: number) {
    this.time = time;
  }

  destroyElement(e: AnimationEvent) {
    if (e.toState === 'void') {
      return this.selfDestroy.emit();
    }
    if (e.toState === 'active' && this.time) {
      return (this.timer = setTimeout(() => this.close(), this.time));
    }
  }

  close() {
    clearTimeout(this.timer);
    this.active = false;
  }

  ngOnDestroy() {
    clearTimeout(this.timer);
  }
}
