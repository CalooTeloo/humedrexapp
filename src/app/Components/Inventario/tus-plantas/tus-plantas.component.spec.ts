import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TusPlantasComponent } from './tus-plantas.component';

describe('TusPlantasComponent', () => {
  let component: TusPlantasComponent;
  let fixture: ComponentFixture<TusPlantasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TusPlantasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TusPlantasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
