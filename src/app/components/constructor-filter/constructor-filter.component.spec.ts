import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructorFilterComponent } from './constructor-filter.component';

describe('ConstructorFilterComponent', () => {
  let component: ConstructorFilterComponent;
  let fixture: ComponentFixture<ConstructorFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructorFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructorFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
