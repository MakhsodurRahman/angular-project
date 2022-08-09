import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPersionListComponent } from './sales-persion-list.component';

describe('SalesPersionListComponent', () => {
  let component: SalesPersionListComponent;
  let fixture: ComponentFixture<SalesPersionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesPersionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesPersionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
