import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdoptantesComponent } from './adoptantes.component';

describe('AdoptantesComponent', () => {
  let component: AdoptantesComponent;
  let fixture: ComponentFixture<AdoptantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoptantesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdoptantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


