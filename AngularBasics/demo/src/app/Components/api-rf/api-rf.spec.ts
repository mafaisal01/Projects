import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiRF } from './api-rf';

describe('ApiRF', () => {
  let component: ApiRF;
  let fixture: ComponentFixture<ApiRF>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiRF]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiRF);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
