import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adoptantes } from './adoptantes';

describe('Adoptantes', () => {
  let component: Adoptantes;
  let fixture: ComponentFixture<Adoptantes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Adoptantes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Adoptantes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
