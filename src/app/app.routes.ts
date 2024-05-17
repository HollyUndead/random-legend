import { Routes } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RandomLegend } from './random-legend/random-legend.component';
import { RandmoWeapon } from './random-weapon/rnadom-weapon.component';

export const routes: Routes = [
  { path: 'randomWeapon', component: RandmoWeapon },
  { path: 'randomLegend', component: RandomLegend },
];
