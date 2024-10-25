import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TuristicoPage } from './turistico.page';

describe('TuristicoPage', () => {
  let component: TuristicoPage;
  let fixture: ComponentFixture<TuristicoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TuristicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
