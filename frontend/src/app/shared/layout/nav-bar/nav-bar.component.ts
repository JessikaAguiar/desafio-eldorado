import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faGamepad, faMicrochip, faList } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  faGamepad = faGamepad;
  faMicrochip = faMicrochip;
  faList = faList;
  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  logout() {
    localStorage.removeItem('token')
    this.router.navigate(['login']);
  }
}
