import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onSelect() > it should emit feature when selected', () => {
    const mock = 'test';
    // spy the emitter
    spyOn(component.featureSelected, 'emit');
    // execute the function
    component.onSelect(mock);
    // check that the emitter has been called
    expect(component.featureSelected.emit).toHaveBeenCalledWith(mock);
  })
});
