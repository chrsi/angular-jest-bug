import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NgxPermissionsService } from 'ngx-permissions';
import { mocked } from 'ts-jest/utils';
import { By } from '@angular/platform-browser';

jest.mock('ngx-permissions');

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  let permissionService: NgxPermissionsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [NgxPermissionsService],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);

    permissionService = TestBed.inject(NgxPermissionsService);

    mocked(permissionService).hasPermission.mockReturnValue(
      Promise.resolve(true)
    );
  });

  it('incrementsCounter_whenClicked', async () => {
    fixture.detectChanges();
    const counterValue = fixture.debugElement.query(By.css('section'))
      .nativeElement.textContent;
    expect(counterValue).toBe('0');

    const counterButton = fixture.debugElement.query(By.css('button'))
      .nativeElement;
    counterButton.click();
    fixture.detectChanges();

    const counterValue2 = fixture.debugElement.query(By.css('section'))
      .nativeElement.textContent;

    expect(counterValue2).toBe('1');
  });
});
