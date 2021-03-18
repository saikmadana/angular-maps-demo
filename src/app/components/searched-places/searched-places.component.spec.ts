import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedPlacesComponent } from './searched-places.component';

describe('SearchedPlacesComponent', () => {
  let component: SearchedPlacesComponent;
  let fixture: ComponentFixture<SearchedPlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchedPlacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchedPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
