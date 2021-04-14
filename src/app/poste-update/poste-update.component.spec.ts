import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosteUpdateComponent } from './poste-update.component';

describe('PosteUpdateComponent', () => {
  let component: PosteUpdateComponent;
  let fixture: ComponentFixture<PosteUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosteUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosteUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
