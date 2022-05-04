import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginViewsComponent } from './login-views.component';

describe('LoginViewsComponent', () => {
  let component: LoginViewsComponent;
  let fixture: ComponentFixture<LoginViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginViewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
