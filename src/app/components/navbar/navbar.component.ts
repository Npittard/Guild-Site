import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() onPress = new EventEmitter<boolean>();
  
  Press() {
    this.onPress.emit(true);
  }

  constructor() { 

  }

  ngOnInit(): void {
  }
}
