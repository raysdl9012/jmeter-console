import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpJmeterComponent } from './http-jmeter.component';

describe('HttpJmeterComponent', () => {
  let component: HttpJmeterComponent;
  let fixture: ComponentFixture<HttpJmeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpJmeterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpJmeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
