import { Component, input } from '@angular/core';
import { Image } from './image.model';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {
  img = input.required<Image>();
  title = input.required<string>();

}
