import { EventEmitter } from '@angular/core';

export interface Notification {
  message: string;
  type: string;
  action?: NotificationAction;
  isSuccess?: boolean;
  duration?: number;
}

export interface NotificationAction {
  name: string;
  action: (notification: Notification) => string;
}

export interface ComponentWithSelfDestroy {
  selfDestroy: EventEmitter<null>;
  closeAfter: (time: number) => void;
}
