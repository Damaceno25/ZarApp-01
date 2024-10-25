import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContPage } from './cont.page';

describe('ContPage', () => {
  let component: ContPage;
  let fixture: ComponentFixture<ContPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ContPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
