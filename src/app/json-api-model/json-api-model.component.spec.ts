import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonApiModelComponent } from './json-api-model.component';

describe('JsonApiModelComponent', () => {
  let component: JsonApiModelComponent;
  let fixture: ComponentFixture<JsonApiModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonApiModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonApiModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
