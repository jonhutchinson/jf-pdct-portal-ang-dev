import { FormControl } from '@angular/forms';

export interface DialogData {
  title: string;
  role: string;
  product: string;
}

export type DialogFormType = {
  email: FormControl<string>;
  details: FormControl<string>;
};
