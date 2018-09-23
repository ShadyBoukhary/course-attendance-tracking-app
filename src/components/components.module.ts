import { NgModule } from '@angular/core';
import { EditProfileFormComponent } from './edit-profile-form/edit-profile-form';
import { FormsModule } from '@angular/forms';
import { IonicModule } from 'ionic-angular';
import { NewCourseFormComponent } from './new-course-form/new-course-form';
@NgModule({
	declarations: [EditProfileFormComponent,
    NewCourseFormComponent],
	imports: [
		FormsModule,
		IonicModule
	],
	exports: [EditProfileFormComponent,
    NewCourseFormComponent]
})
export class ComponentsModule {}
