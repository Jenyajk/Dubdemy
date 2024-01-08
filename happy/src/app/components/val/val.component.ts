import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-val',
  standalone: true,
  imports: [],
  templateUrl: './val.component.html',
  styleUrl: './val.component.scss'
})
export class ValComponent {
  constructor(private router: Router ) {}
  test() {
   this.router.navigate(['two'])
  }
}
