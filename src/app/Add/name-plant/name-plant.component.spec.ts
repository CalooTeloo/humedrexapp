import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamePlantComponent } from './name-plant.component';

describe('NamePlantComponent', () => {
  let component: NamePlantComponent;
  let fixture: ComponentFixture<NamePlantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NamePlantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NamePlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
