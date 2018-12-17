import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.css']
})
export class CatCardComponent implements OnInit {

  url = "assets/background.jpg";

  constructor() { }

  ngOnInit() {
  }

}
