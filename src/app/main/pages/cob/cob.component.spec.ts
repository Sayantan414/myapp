import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CobComponent } from './cob.component';

describe('CobComponent', () => {
  let component: CobComponent;
  let fixture: ComponentFixture<CobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CobComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
