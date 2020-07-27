import { ComponentsModule } from './../components.module';

import { Component, OnInit } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { IonSlides, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})


  export class SlidesComponent implements OnInit {
    slideOpts = {
      initialSlide: 0,
      speed: 400
    };
    constructor() { }

  ngOnInit() {}
}
