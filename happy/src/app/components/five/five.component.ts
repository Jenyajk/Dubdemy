import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-five',
  standalone: true,
  imports: [MatCardModule,MatButtonModule],
  templateUrl: './five.component.html',
  styleUrl: './five.component.scss'
})
export class FiveComponent {
  constructor(private router: Router ) {}
 Next() {
  this.router.navigate(['four'])
 }
 Previous() {
  this.router.navigate(['/'])
 }

}
