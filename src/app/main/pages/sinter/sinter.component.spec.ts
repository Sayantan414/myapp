import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinterComponent } from './sinter.component';

describe('SinterComponent', () => {
  let component: SinterComponent;
  let fixture: ComponentFixture<SinterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
