import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiroProjeto2Component } from './primeiro-projeto2.component';

describe('PrimeiroProjeto2Component', () => {
  let component: PrimeiroProjeto2Component;
  let fixture: ComponentFixture<PrimeiroProjeto2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeiroProjeto2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeiroProjeto2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
