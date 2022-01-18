import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiroProjetoComponent } from './primeiro-projeto.component';

describe('PrimeiroProjetoComponent', () => {
  let component: PrimeiroProjetoComponent;
  let fixture: ComponentFixture<PrimeiroProjetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeiroProjetoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeiroProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
