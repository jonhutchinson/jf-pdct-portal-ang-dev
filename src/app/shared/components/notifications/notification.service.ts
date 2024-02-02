import { first } from 'rxjs/operators';
import { Notification } from './notification.models';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subject } from 'rxjs';
import { NotificationsComponent } from './notifications.component';

export const CONFIG_NOTIFICATION: Notification = {
  message: '',
  type: '',
  duration: 7000
};

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private _newNotification = new Subject<Notification>();
  private _matSnackBarOpened = false;

  constructor(private _matSnackBar: MatSnackBar) {}

  addNotification(message: string, type: string = 'success') {
    this.addNotificationWithInterface({ message, type });
  }

  addNotificationWithInterface(notification: Notification) {
    if (!this._matSnackBarOpened) {
      this.openTemplate();
    }
    this._newNotification.next({ ...CONFIG_NOTIFICATION, ...notification });
  }

  openTemplate() {
    this._matSnackBarOpened = true;
    this._matSnackBar
      .openFromComponent(NotificationsComponent, {
        data: { newNotifications: this.getNewNotification() },
        verticalPosition: 'top',
        panelClass: 'mat-snack-bar-container_pure-snackbar'
      })
      .afterDismissed()
      .pipe(first())
      .subscribe(() => (this._matSnackBarOpened = false));
  }

  getNewNotification(): Observable<Notification> {
    return this._newNotification.asObservable();
  }
}
