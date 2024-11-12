import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonForumComponent } from './mon-forum.component';

describe('MonForumComponent', () => {
  let component: MonForumComponent;
  let fixture: ComponentFixture<MonForumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonForumComponent]
    });
    fixture = TestBed.createComponent(MonForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
