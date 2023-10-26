import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlataformasComponent } from './plataformas.component';

describe('PlataformasComponent', () => {
  let component: PlataformasComponent;
  let fixture: ComponentFixture<PlataformasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlataformasComponent]
    });
    fixture = TestBed.createComponent(PlataformasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
