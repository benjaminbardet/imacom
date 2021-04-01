import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuatreZeroQuatreComponent } from './quatre-zero-quatre.component';

describe('QuatreZeroQuatreComponent', () => {
  let component: QuatreZeroQuatreComponent;
  let fixture: ComponentFixture<QuatreZeroQuatreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuatreZeroQuatreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuatreZeroQuatreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
