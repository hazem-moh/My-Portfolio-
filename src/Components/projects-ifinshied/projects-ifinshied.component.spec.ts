import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsIFinshiedComponent } from './projects-ifinshied.component';

describe('ProjectsIFinshiedComponent', () => {
  let component: ProjectsIFinshiedComponent;
  let fixture: ComponentFixture<ProjectsIFinshiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsIFinshiedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsIFinshiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
