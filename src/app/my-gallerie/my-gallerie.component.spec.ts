import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGallerieComponent } from './my-gallerie.component';

describe('MyGallerieComponent', () => {
  let component: MyGallerieComponent;
  let fixture: ComponentFixture<MyGallerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyGallerieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGallerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
