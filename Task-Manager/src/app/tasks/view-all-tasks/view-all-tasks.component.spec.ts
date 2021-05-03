import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewAllTasksComponent } from './view-all-tasks.component';

describe('ViewAlTasksComponent', () => {
  let component: ViewAllTasksComponent;
  let fixture: ComponentFixture<ViewAllTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
