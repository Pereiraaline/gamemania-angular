import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcGamersComponent } from './pc-gamers.component';

describe('PcGamersComponent', () => {
  let component: PcGamersComponent;
  let fixture: ComponentFixture<PcGamersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcGamersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PcGamersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
