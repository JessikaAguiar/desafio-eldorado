import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesViewsComponent } from './devices-views.component';

describe('DevicesViewsComponent', () => {
  let component: DevicesViewsComponent;
  let fixture: ComponentFixture<DevicesViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevicesViewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
