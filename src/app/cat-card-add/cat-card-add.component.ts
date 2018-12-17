import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cat-card-add',
  templateUrl: './cat-card-add.component.html',
  styleUrls: ['./cat-card-add.component.css']
})
export class CatCardAddComponent implements OnInit {

  url = "https://cdn2.thecatapi.com/images/" + Math.floor((Math.random() * 3) + 1) + ".jpg";

  constructor() { }

  ngOnInit() {
  }

}
