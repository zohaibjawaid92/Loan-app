import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoanVerificationPage } from './loan-verification.page';

describe('LoanVerificationPage', () => {
  let component: LoanVerificationPage;
  let fixture: ComponentFixture<LoanVerificationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanVerificationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoanVerificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
