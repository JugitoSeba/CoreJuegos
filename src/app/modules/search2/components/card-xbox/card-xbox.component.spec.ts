import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardXboxComponent } from './card-xbox.component';

describe('CardXboxComponent', () => {
  let component: CardXboxComponent;
  let fixture: ComponentFixture<CardXboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardXboxComponent]
    });
    fixture = TestBed.createComponent(CardXboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
