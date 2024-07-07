import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'layout-skeleton',
  standalone: true,
  imports: [
    RouterModule,
  ],
  templateUrl: './skeleton.component.html',
  styleUrl: './skeleton.component.css'
})
export class SkeletonComponent {

}
