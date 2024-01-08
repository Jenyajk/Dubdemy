import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-one',
  standalone: true,
  imports: [MatCardModule,MatButtonModule],
  templateUrl: './one.component.html',
  styleUrl: './one.component.scss'
})
export class OneComponent {
  constructor(private router: Router ) {}
 Next() {
  this.router.navigate(['two'])
 }
 Previous() {
  this.router.navigate(['/'])
 }

}
