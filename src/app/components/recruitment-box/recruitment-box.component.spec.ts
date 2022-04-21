import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitmentBoxComponent } from './recruitment-box.component';

describe('RecruitmentBoxComponent', () => {
  let component: RecruitmentBoxComponent;
  let fixture: ComponentFixture<RecruitmentBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruitmentBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitmentBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
