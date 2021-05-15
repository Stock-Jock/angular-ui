import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SidebarComponent } from './../sidebar/sidebar.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

}
