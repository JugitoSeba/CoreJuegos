import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPs4Component } from './card-ps4.component';

describe('CardComponent', () => {
  let component: CardPs4Component;
  let fixture: ComponentFixture<CardPs4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPs4Component]
    });
    fixture = TestBed.createComponent(CardPs4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
