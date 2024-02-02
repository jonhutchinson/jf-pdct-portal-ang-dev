import { Component, inject, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { DialogData, DialogFormType } from './dialog.model';
import { AuthService } from '@auth0/auth0-angular';
import { AccessRequestPayload, AccessService } from '../../../core/services/access.service';
import { Subscription } from 'rxjs';
import { getRoles, setRoles } from '../../../core/common/roles';

const EMAIL_MAX_LENGTH = 255;
const EMAIL_VALIDATOR_RILES: ValidatorFn[] = [
  Validators.required,
  Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$'),
  Validators.maxLength(EMAIL_MAX_LENGTH)
];

const createDialogForm = (): FormGroup => {
  return inject(FormBuilder).nonNullable.group({
    email: ['', EMAIL_VALIDATOR_RILES],
    details: ['']
  });
};

@Component({
  selector: 'j-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit, OnDestroy {
  form: FormGroup<DialogFormType> = createDialogForm();
  roles: string[] = [];
  private readonly subs = new Subscription();

  constructor(
    private _dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private authService: AuthService,
    private accessService: AccessService
  ) {}

  ngOnInit() {
    this.subs.add(
      this.authService.user$.subscribe((user) => {
        if (user?.email) {
          this.roles = user['https://jplusportal/roles'] || [];
          this.form.get('email')?.patchValue(user.email);
        }
      })
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  cancel() {
    this._dialogRef.close();
  }

  submit() {
    if (this.form.valid) {
      const payload = { ...this.form.value, ...{ role: this.data.role, product: this.data.product } };
      const roles = getRoles();
      this.subs.add(
        this.accessService.accessRequest(payload as AccessRequestPayload).subscribe(() => {
          setRoles([...this.roles, ...roles, this.data.role]);
          this._dialogRef.close(this.form.value);
        })
      );
    }
  }
}
