import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumedPlantComponent } from './humed-plant.component';

describe('HumedPlantComponent', () => {
  let component: HumedPlantComponent;
  let fixture: ComponentFixture<HumedPlantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HumedPlantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumedPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
