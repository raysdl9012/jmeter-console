import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadgroupComponent } from './threadgroup.component';

describe('ThreadgroupComponent', () => {
  let component: ThreadgroupComponent;
  let fixture: ComponentFixture<ThreadgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreadgroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
