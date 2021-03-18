import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedPlacesDetailsComponent } from './searched-places-details.component';

describe('SearchedPlacesDetailsComponent', () => {
  let component: SearchedPlacesDetailsComponent;
  let fixture: ComponentFixture<SearchedPlacesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchedPlacesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchedPlacesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
