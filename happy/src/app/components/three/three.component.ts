import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-three',
  standalone: true,
  imports: [MatCardModule,MatButtonModule],
  templateUrl: './three.component.html',
  styleUrl: './three.component.scss'
})
export class ThreeComponent {
  constructor(private router: Router ) {}
 Next() {
  this.router.navigate(['four'])
 }
 Previous() {
  this.router.navigate(['two'])
 }

}
