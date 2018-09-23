import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the NewCourseFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'new-course-form',
  templateUrl: 'new-course-form.html'
})
export class NewCourseFormComponent {

  createCourseForm: FormGroup;
  @Output() course: EventEmitter<any>;

  constructor(private formBuilder: FormBuilder) {
    this.course = new EventEmitter<any>();

    this.createCourseForm = this.formBuilder.group({
      department: [''],
      courseNum: [''],
      section: [''],
      term: [''],
      year: [''],
      room: [''],
      building: [''],
      startDate: [''],
      endDate: ['']
    });
  }

}
