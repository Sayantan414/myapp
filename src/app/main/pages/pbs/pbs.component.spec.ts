import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbsComponent } from './pbs.component';

describe('PbsComponent', () => {
  let component: PbsComponent;
  let fixture: ComponentFixture<PbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PbsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
