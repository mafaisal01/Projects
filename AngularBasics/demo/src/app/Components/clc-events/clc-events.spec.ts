import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClcEvents } from './clc-events';

describe('ClcEvents', () => {
  let component: ClcEvents;
  let fixture: ComponentFixture<ClcEvents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClcEvents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClcEvents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
