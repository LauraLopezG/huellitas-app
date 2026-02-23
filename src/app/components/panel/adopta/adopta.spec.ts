import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adopta } from './adopta';

describe('Adopta', () => {
  let component: Adopta;
  let fixture: ComponentFixture<Adopta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Adopta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Adopta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
