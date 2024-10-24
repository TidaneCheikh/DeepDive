import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
  //encapsulation:ViewEncapsulation.None,
})
export class DashboardItemComponent {
  @Input() image !: { scr :string ,alt:string}  ;
  @Input() title !: string;

}
