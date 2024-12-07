import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoraPlantComponent } from './hora-plant.component';

describe('HoraPlantComponent', () => {
  let component: HoraPlantComponent;
  let fixture: ComponentFixture<HoraPlantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoraPlantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoraPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
