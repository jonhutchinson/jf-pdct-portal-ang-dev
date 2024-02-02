import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { PRODUCT_LIST } from './landing.data';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../shared/components/dialog/dialog.component';
import { NotificationService } from '../../shared/components/notifications/notification.service';
import { ProductListModel } from '../../models';
import { AuthService } from '@auth0/auth0-angular';
import { Subscription } from 'rxjs';
import { getRoles } from '../../core/common/roles';

/** Define Dialog variables */
const DIALOG_WIDTH = '660px';
const GREETING_MESSAGE = 'Changes applied Access request was successful, you can check progress via the support channel for this product';

@Component({
  selector: 'j-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingComponent implements OnInit, OnDestroy {
  productList = PRODUCT_LIST;
  private readonly subs = new Subscription();

  /**
   * @param dialog: MatDialog,
   * @param changeDetectorRef: ChangeDetectorRef,
   * @param notificationService: NotificationService,
   * @param authService: AuthService,
   */
  constructor(
    private dialog: MatDialog,
    private changeDetectorRef: ChangeDetectorRef,
    private notificationService: NotificationService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.checkUserRoles();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  /**
   * @param data: ProductListModel,
   * @param index: number
   */
  openDialog({ id, title, role }: ProductListModel, index: number) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: DIALOG_WIDTH,
      autoFocus: false,
      data: {
        role,
        title: `Request access to J+ ${title}`,
        product: `J+ ${title}`
      }
    });
    dialogRef.afterClosed().subscribe((formData) => {
      if (formData) {
        this.productList[index].products.forEach((product) => {
          if (product.id === id) {
            product.accessSend = true;
            this.notificationService.addNotification(GREETING_MESSAGE);
            this.changeDetectorRef.detectChanges();
          }
        });
      }
    });
  }
  private checkUserRoles() {
    this.subs.add(
      this.authService.user$.subscribe((user) => {
        if (user) {
          const storedRoles = getRoles();
          let roles = user['https://jplusportal/roles'] || [];
          roles = Array.from(new Set([...roles, ...storedRoles]));
          this.productList.forEach((list) => {
            list.products.forEach((product) => {
              if (roles.includes(product.role) && product.role !== 'ROLE_CREATIVE_WORKFLOW') {
                product.accessSend = true;
                this.changeDetectorRef.detectChanges();
              }
            });
          });
        }
      })
    );
  }
}
