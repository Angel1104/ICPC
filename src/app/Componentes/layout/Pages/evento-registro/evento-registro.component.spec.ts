import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoRegistroComponent } from './evento-registro.component';

describe('EventoRegistroComponent', () => {
  let component: EventoRegistroComponent;
  let fixture: ComponentFixture<EventoRegistroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventoRegistroComponent]
    });
    fixture = TestBed.createComponent(EventoRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
