import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalSuppliesComponent } from './medical-supplies.component';

describe('MedicalSuppliesComponent', () => {
  let component: MedicalSuppliesComponent;
  let fixture: ComponentFixture<MedicalSuppliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalSuppliesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalSuppliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
