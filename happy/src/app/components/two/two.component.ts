import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-two',
  standalone: true,
  imports: [MatCardModule,MatButtonModule],
  templateUrl: './two.component.html',
  styleUrl: './two.component.scss'
})
export class TwoComponent {
  constructor(private router: Router ) {}
 Next() {
  this.router.navigate(['three'])
 }
 Previous() {
  this.router.navigate(['one'])
 }
 Val() {
  this.router.navigate(['val'])
 }
}
