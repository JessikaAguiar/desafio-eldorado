import { Component, OnInit } from '@angular/core';
import { faBell } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  bell = faBell;
  name = ''
  constructor() { }

  ngOnInit(): void {
    let nameStore = localStorage.getItem('user')
    if(nameStore) {
      this.name = nameStore
    }
  }

}
