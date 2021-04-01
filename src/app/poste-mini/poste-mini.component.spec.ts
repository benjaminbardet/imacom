import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosteMiniComponent } from './poste-mini.component';

describe('PosteMiniComponent', () => {
  let component: PosteMiniComponent;
  let fixture: ComponentFixture<PosteMiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosteMiniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosteMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
