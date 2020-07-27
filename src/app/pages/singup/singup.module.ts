import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingupPageRoutingModule } from './singup-routing.module';

import { SingupPage } from './singup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingupPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SingupPage]
})
export class SingupPageModule {}
