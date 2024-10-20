import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpentPointsDialogComponent } from './spent-points-dialog.component';

describe('SpentPointsDialogComponent', () => {
  let component: SpentPointsDialogComponent;
  let fixture: ComponentFixture<SpentPointsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpentPointsDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpentPointsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
