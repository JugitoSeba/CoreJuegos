import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPs3Component } from './card-ps3.component';

describe('CardPs3Component', () => {
  let component: CardPs3Component;
  let fixture: ComponentFixture<CardPs3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPs3Component]
    });
    fixture = TestBed.createComponent(CardPs3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
