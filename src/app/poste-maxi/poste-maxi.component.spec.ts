import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosteMaxiComponent } from './poste-maxi.component';

describe('PosteMaxiComponent', () => {
  let component: PosteMaxiComponent;
  let fixture: ComponentFixture<PosteMaxiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosteMaxiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosteMaxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
