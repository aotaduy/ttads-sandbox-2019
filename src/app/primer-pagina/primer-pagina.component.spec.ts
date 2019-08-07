import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerPaginaComponent } from './primer-pagina.component';

describe('PrimerPaginaComponent', () => {
  let component: PrimerPaginaComponent;
  let fixture: ComponentFixture<PrimerPaginaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerPaginaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
