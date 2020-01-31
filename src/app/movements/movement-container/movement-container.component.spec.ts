import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementContainerComponent } from './movement-container.component';

describe('MovementContainerComponent', () => {
  let component: MovementContainerComponent;
  let fixture: ComponentFixture<MovementContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovementContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovementContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
