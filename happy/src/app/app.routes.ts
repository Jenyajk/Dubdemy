import { Routes } from '@angular/router';
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';
import { MainComponent } from './components/main/main.component';
import { ValComponent } from './components/val/val.component';
import { ThreeComponent } from './components/three/three.component';
import { FourComponent } from './components/four/four.component';
import { FiveComponent } from './components/five/five.component';

export const routes: Routes = [
  { path: '', component: MainComponent},
  { path : 'one', component: OneComponent},
  { path : 'two', component: TwoComponent},
  { path : 'val', component: ValComponent},
  { path : 'three', component: ThreeComponent},
  { path : 'four', component: FourComponent},
  { path : 'five', component: FiveComponent},
];

