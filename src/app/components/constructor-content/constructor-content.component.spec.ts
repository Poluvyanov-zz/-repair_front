import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructorContentComponent } from './constructor-content.component';

describe('ConstructorContentComponent', () => {
  let component: ConstructorContentComponent;
  let fixture: ComponentFixture<ConstructorContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructorContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructorContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
