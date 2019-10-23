import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructorNavigationComponent } from './constructor-navigation.component';

describe('ConstructorNavigationComponent', () => {
  let component: ConstructorNavigationComponent;
  let fixture: ComponentFixture<ConstructorNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructorNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructorNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
