import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotDePasseComponent } from './mot-de-passe.component';

describe('MotDePasseComponent', () => {
  let component: MotDePasseComponent;
  let fixture: ComponentFixture<MotDePasseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MotDePasseComponent]
    });
    fixture = TestBed.createComponent(MotDePasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
