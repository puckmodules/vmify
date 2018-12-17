import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableCatCardComponent } from './editable-cat-card.component';

describe('EditableCatCardComponent', () => {
  let component: EditableCatCardComponent;
  let fixture: ComponentFixture<EditableCatCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditableCatCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableCatCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
