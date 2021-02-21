import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { HomepageRoutingModule } from './homepage-routing.module';
import { EligibalityCalculatorComponent } from './eligibality-calculator/eligibality-calculator.component';
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, MenuComponent, EligibalityCalculatorComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    MatSliderModule,
    FormsModule      
  ]
})
export class HomepageModule { }
