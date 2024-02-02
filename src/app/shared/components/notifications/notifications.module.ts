import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { NotificationsComponent } from './notifications.component';
import { NotificationItemComponent } from './notification/notification.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@NgModule({
  declarations: [NotificationsComponent, NotificationItemComponent],
  imports: [CommonModule, MatIconModule],
  exports: [NotificationsComponent],
  providers: [MatSnackBar]
})
export class JNotificationsModule {}
