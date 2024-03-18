import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sign_upComponent } from './sign_up.component';

describe('SigninComponent', () => {
  let component: Sign_upComponent;
  let fixture: ComponentFixture<Sign_upComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sign_upComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sign_upComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
