import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantAguaComponent } from './cant-agua.component';

describe('CantAguaComponent', () => {
  let component: CantAguaComponent;
  let fixture: ComponentFixture<CantAguaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CantAguaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CantAguaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
