import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MatCardModule,MatButtonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  constructor(private router: Router ) {}
 Test() {
  this.router.navigate(['one'])
 }
}
