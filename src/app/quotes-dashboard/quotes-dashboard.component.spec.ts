import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesDashboardComponent } from './quotes-dashboard.component';

describe('QuotesDashboardComponent', () => {
  let component: QuotesDashboardComponent;
  let fixture: ComponentFixture<QuotesDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotesDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
