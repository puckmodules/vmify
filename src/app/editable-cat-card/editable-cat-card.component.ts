import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'editable-cat-card',
  templateUrl: './editable-cat-card.component.html',
  styleUrls: ['./editable-cat-card.component.css']
})
export class EditableCatCardComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['Rafeiro', 'Persa'];
  filteredOptions: Observable<string[]>;

  constructor() { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

}
