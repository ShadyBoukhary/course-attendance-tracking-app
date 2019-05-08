import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DEPARTMENTS } from '../../providers/constants';
import { Course } from '../../models/course';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { UtilitiesProvider } from '../../providers/utilities/utilities';
import { CourseDataServiceProvider } from '../../providers/data-service/course-data-service';
import { Student } from '../../models/student';
import { ImageDataServiceProvider } from '../../providers/data-service/image-data-service';

/**
 * Generated class for the AddCoursePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-course',
  templateUrl: 'add-course.html',
})
export class AddCoursePage {

  createCourseForm: FormGroup;
  departments: string[];
  startDate: string;
  endDate: string;
  students: Student[];
  courseId: string;
  constructor(private view: ViewController, private formBuilder: FormBuilder, private auth: AuthServiceProvider, private utilities: UtilitiesProvider, private data: CourseDataServiceProvider,
              private modal: ModalController, private imageDataProvider: ImageDataServiceProvider) {
    this.departments = DEPARTMENTS;
    this.students = [];
    this.courseId = Math.floor(Date.now() / 1000).toString();

    this.createCourseForm = this.formBuilder.group({
      department: ['', Validators.required],
      courseNum: ['', Validators.required],
      section: ['', Validators.required],
      term: ['', Validators.required],
      year: ['', Validators.required],
      room: ['', Validators.required],
      building: ['', Validators.required],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCoursePage');
  }

  async save() {

    if (this.startDate != null && this.endDate != null && this.students.length > 0) {

      let loader = this.utilities.createLoading('Creating course...');
        loader.present();

      let start = this.startDate.split('-');
      let end = this.endDate.split('-');
      let startDate = new Date(parseInt(start[0]), parseInt(start[1]) - 1, parseInt(start[2]), 12);
      let endDate = new Date(parseInt(end[0]), parseInt(end[1]) - 1, parseInt(end[2]), 12);
      try {
        let course = new Course(await this.auth.getCurrentUser(),
          this.createCourseForm.controls['department'].value,
          this.createCourseForm.controls['courseNum'].value,
          this.createCourseForm.controls['section'].value,
          this.createCourseForm.controls['term'].value,
          this.createCourseForm.controls['year'].value,
          this.createCourseForm.controls['room'].value,
          this.createCourseForm.controls['building'].value,
          startDate.getTime(),
          endDate.getTime());

        course.setId(this.courseId);
        course.addStudents(this.students);
        console.log(course);



        let promises = course.getStudents().map((student)=> this.imageDataProvider.uploadImage(student.imageData, course.getId(), student.image));
        await Promise.all(promises);
        await this.data.createCourse(course);
        await this.imageDataProvider.train(course.getId());

        console.log('Done Uploading');
        console.log('hi');
        loader.dismiss();
        this.utilities.createToast('Course created!', 3000).present();
        this.view.dismiss();

      } catch (e) {
        loader.dismiss();
        console.log(JSON.stringify(e));
        this.utilities.createToast(e, 3000).present();

      }
      


    } else {
      this.utilities.createToast('Please enter a start date and an end date.', 3000).present();
    }


  }

  addStudent() {
    let modal = this.modal.create('AddStudentPage', {courseId: this.courseId});
    modal.onDidDismiss((data) => {
      if (data.added == true) {
        console.log(JSON.stringify(data.student.name));
        this.students.push(data.student);
      }
    });
    modal.present();
  }

  removeStudent(i: number) {
    this.students.splice(i, 1);
  }

  dismiss() {
    this.view.dismiss();
  }

}
