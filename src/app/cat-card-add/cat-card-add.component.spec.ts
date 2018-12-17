import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatCardAddComponent } from './cat-card-add.component';

describe('CatCardAddComponent', () => {
  let component: CatCardAddComponent;
  let fixture: ComponentFixture<CatCardAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatCardAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatCardAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
