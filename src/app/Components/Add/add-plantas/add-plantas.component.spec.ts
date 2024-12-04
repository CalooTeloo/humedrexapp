import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlantasComponent } from './add-plantas.component';

describe('AddPlantasComponent', () => {
  let component: AddPlantasComponent;
  let fixture: ComponentFixture<AddPlantasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPlantasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPlantasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
