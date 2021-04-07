import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGallerieComponent } from './search-gallerie.component';

describe('SearchGallerieComponent', () => {
  let component: SearchGallerieComponent;
  let fixture: ComponentFixture<SearchGallerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchGallerieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchGallerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
