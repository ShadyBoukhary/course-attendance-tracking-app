import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { regexValidators } from '../../providers/utilities/utilities';
import { User } from '../../models/user';


/**
 * Generated class for the EditProfileFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'edit-profile-form',
  templateUrl: 'edit-profile-form.html'
})
export class EditProfileFormComponent {

  text: string;
  editProfileForm: FormGroup;
  @Output() profile: EventEmitter<any>;


  constructor(private formBuilder: FormBuilder) {
    this.profile = new EventEmitter<any>();

    this.editProfileForm = this.formBuilder.group({
      firstName: ['', Validators.compose([
        Validators.required,
      ])],
      lastName: ['', Validators.required],
      department: ['', Validators.required],
      title: ['', Validators.required],
      phone: ['', Validators.required],
      office: ['', Validators.required]
    });
  }

  updateProfile() {
    let data = {
      firstName: this.editProfileForm.controls['firstName'].value,
      lastName: this.editProfileForm.controls['lastName'].value,
      department: this.editProfileForm.controls['department'].value,
      title: this.editProfileForm.controls['title'].value,
      phone: this.editProfileForm.controls['phone'].value,
      office: this.editProfileForm.controls['office'].value,
    };
    this.profile.emit(data);
  }

}
