import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EducationEmploymentPage } from './education-employment.page';

describe('EducationEmploymentPage', () => {
  let component: EducationEmploymentPage;
  let fixture: ComponentFixture<EducationEmploymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationEmploymentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EducationEmploymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
