import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPointsDialogComponent } from './add-points-dialog.component';

describe('AddPointsDialogComponent', () => {
  let component: AddPointsDialogComponent;
  let fixture: ComponentFixture<AddPointsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPointsDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPointsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
