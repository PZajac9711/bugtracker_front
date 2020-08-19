import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateResetComponent } from './generate-reset.component';

describe('GenerateResetComponent', () => {
  let component: GenerateResetComponent;
  let fixture: ComponentFixture<GenerateResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateResetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
