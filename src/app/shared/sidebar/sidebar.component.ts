import { Component, OnInit } from '@angular/core';
import { Router, TitleStrategy } from '@angular/router';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems:any=[];

  constructor(
    private sidebarServices: SidebarService, 
    private router: Router) {
      this.menuItems = this.sidebarServices.menu;
      console.log(this.menuItems)
     }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate([''])
  }

}
