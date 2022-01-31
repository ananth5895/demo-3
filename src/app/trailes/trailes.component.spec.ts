import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailesComponent } from './trailes.component';

describe('TrailesComponent', () => {
  let component: TrailesComponent;
  let fixture: ComponentFixture<TrailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrailesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
