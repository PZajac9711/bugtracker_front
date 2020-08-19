import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignToComponent } from './sign-to.component';

describe('SignToComponent', () => {
  let component: SignToComponent;
  let fixture: ComponentFixture<SignToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
