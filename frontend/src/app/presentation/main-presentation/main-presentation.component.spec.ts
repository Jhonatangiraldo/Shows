import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPresentationComponent } from './main-presentation.component';

describe('MainPresentationComponent', () => {
  let component: MainPresentationComponent;
  let fixture: ComponentFixture<MainPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
