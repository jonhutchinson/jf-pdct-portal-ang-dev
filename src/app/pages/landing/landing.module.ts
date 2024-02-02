import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { JDialogModule } from '../../shared/components/dialog/dialog.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [CommonModule, CardComponent, MatDialogModule, JDialogModule, MatFormFieldModule],
  declarations: [LandingComponent],
  exports: [LandingComponent]
})
export class LandingModule {}
