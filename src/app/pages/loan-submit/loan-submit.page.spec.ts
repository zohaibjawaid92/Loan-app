import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoanSubmitPage } from './loan-submit.page';

describe('LoanSubmitPage', () => {
  let component: LoanSubmitPage;
  let fixture: ComponentFixture<LoanSubmitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanSubmitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoanSubmitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
