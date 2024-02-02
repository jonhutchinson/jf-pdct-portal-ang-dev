import { first } from 'rxjs/operators';
import { NotificationItemComponent } from './notification/notification.component';
import {
  Inject,
  Component,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  NgModuleRef,
  Compiler,
  Injector,
  ComponentFactoryResolver,
  ComponentFactory,
  ViewContainerRef,
  ViewRef
} from '@angular/core';
import { Notification } from './notification.models';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';

@Component({
  selector: 'j-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements AfterViewInit, OnDestroy {
  private _notificationComponents: ViewRef[] = [];
  private _notificationComponentFactory: ComponentFactory<NotificationItemComponent>;
  private readonly _subs = new Subscription();
  private readonly _maxHeightNotifications = 0.5;

  @ViewChild('notificationsContainer') notificationsContainer!: ElementRef;
  @ViewChild('notificationsContainerForRender', {
    read: ViewContainerRef
  })
  notificationsContainerForRender!: ViewContainerRef;

  /* eslint-disable  @typescript-eslint/no-explicit-any */
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) private _data: any,
    private _snackBarRef: MatSnackBarRef<NotificationsComponent>,
    private _compiler: Compiler,
    private _injector: Injector,
    private _resolver: ComponentFactoryResolver,
    private _moduleRef: NgModuleRef<any>
  ) {
    this._notificationComponentFactory = this._resolver.resolveComponentFactory(NotificationItemComponent);
  }

  ngAfterViewInit() {
    this.getNotifications();
  }

  /** Get new notification */
  public getNotifications() {
    this._subs.add(
      this._data.newNotifications.subscribe((notification: Notification) => {
        this._checkHeightNotifications();
        const component = this._notificationComponentFactory.create(this._injector, [], null, this._moduleRef);
        component.instance.notification = notification;
        component.instance.closeAfter(notification?.duration ?? 0);
        component.instance.selfDestroy.pipe(first()).subscribe(() => {
          component.destroy();
          this.filterDontDestroyed();
        });
        if (notification.action) {
          component.instance.action.pipe(first()).subscribe(notification.action.action);
        }
        this._notificationComponents.push(this.notificationsContainerForRender.insert(component.hostView));
      })
    );
  }

  /** Remove notification */
  removeNotification() {
    this._notificationComponents[0].destroy();
    this._notificationComponents.splice(0, 1);
  }

  /** Remove notifications that was destroyed */
  filterDontDestroyed() {
    this._notificationComponents = this._notificationComponents.filter((item) => !item.destroyed);
    if (this._notificationComponents.length === 0) {
      this._snackBarRef.dismiss();
    }
  }

  /**  Check height of block for display notifications */
  private _checkHeightNotifications() {
    if (
      this._notificationComponents.length &&
      this.notificationsContainer.nativeElement.clientHeight > window.innerHeight * this._maxHeightNotifications
    ) {
      this.removeNotification();
    }
  }

  ngOnDestroy() {
    this._subs.unsubscribe();
  }
}
