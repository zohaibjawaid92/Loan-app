import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PhotoAttachPage } from './photo-attach.page';

describe('PhotoAttachPage', () => {
  let component: PhotoAttachPage;
  let fixture: ComponentFixture<PhotoAttachPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoAttachPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoAttachPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
