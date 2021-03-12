import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcurrencyComponent } from './concurrency.component';

describe('ConcurrencyComponent', () => {
  let component: ConcurrencyComponent;
  let fixture: ComponentFixture<ConcurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcurrencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
