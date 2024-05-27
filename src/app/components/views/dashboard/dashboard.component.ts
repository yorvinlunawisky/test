import { Component } from '@angular/core';
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";
import {NavbarComponent} from "../../shared/navbar/navbar.component";
import {RouterOutlet} from "@angular/router";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
  imports: [SidebarComponent, NavbarComponent, RouterOutlet]
})
export class DashboardComponent {

}
