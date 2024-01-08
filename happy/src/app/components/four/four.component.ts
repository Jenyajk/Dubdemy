import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-four',
  standalone: true,
  imports: [MatCardModule,MatButtonModule],
  templateUrl: './four.component.html',
  styleUrl: './four.component.scss'
})
export class FourComponent {
  constructor(private router: Router ) {}
 Next() {
  this.router.navigate(['five'])
 }
 Previous() {
  this.router.navigate(['three'])
 }

}
