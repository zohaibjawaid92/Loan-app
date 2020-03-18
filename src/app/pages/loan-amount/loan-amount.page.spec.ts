import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoanAmountPage } from './loan-amount.page';

describe('LoanAmountPage', () => {
  let component: LoanAmountPage;
  let fixture: ComponentFixture<LoanAmountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanAmountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoanAmountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
