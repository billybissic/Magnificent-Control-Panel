import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';

import { MailinglistTableComponent } from './mailinglist-table.component';

describe('MailinglistTableComponent', () => {
  let component: MailinglistTableComponent;
  let fixture: ComponentFixture<MailinglistTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailinglistTableComponent ],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailinglistTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
