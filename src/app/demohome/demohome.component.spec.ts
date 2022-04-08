import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemohomeComponent } from './demohome.component';

describe('DemohomeComponent', () => {
  let component: DemohomeComponent;
  let fixture: ComponentFixture<DemohomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemohomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemohomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
