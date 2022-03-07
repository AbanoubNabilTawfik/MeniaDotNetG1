import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwWayBindingComponent } from './tw-way-binding.component';

describe('TwWayBindingComponent', () => {
  let component: TwWayBindingComponent;
  let fixture: ComponentFixture<TwWayBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwWayBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwWayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
