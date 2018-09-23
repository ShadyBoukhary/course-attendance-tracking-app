import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIConstants, StorageConstants } from '../constants';
import { AuthServiceProvider } from '../auth-service/auth-service';
import { User } from '../../models/user';
import { Course } from '../../models/course';


@Injectable()
export class CourseDataServiceProvider {

    constructor(public http: HttpClient, private auth: AuthServiceProvider) {
        console.log('Hello DataServiceProvider Provider');
    }


    async createCourse(course: Course) {

        // Get token and userId
        let jwt = await this.auth.getJWT();
        // Set Headers
        let headers = new HttpHeaders().set(StorageConstants.JSON_WEB_TOKEN, jwt);
        headers.set('Content-Type', 'application/json');

        // Make HTTP Request
        return new Promise((resolve, reject) => {
            this.http.post(`${APIConstants.baseUrl}${APIConstants.createCourseUrl}`, course, { headers: headers })
                .subscribe((dat: any) => {

                    console.log(dat);
                    if (dat.status !== 200) {
                        console.log('rejecting')
                        reject(dat.message);
                    }

                    resolve(dat);
                },
                    error => {
                        console.log(error);
                        reject(error.error.message);
                    });
        });
    }

    async getUserCourses(): Promise<any> {

        // Get token and userId
        let jwt = await this.auth.getJWT();
        let userId = await this.auth.getCurrentUser();

        // Set Headers
        let headers = new HttpHeaders().set(StorageConstants.JSON_WEB_TOKEN, jwt);
        headers.set('Content-Type', 'application/json');

        let params = new HttpParams();
        params.set('userId', userId);

        // Make HTTP Request
        return new Promise((resolve, reject) => {
            this.http.get(`${APIConstants.baseUrl}${APIConstants.createCourseUrl}`, { headers: headers, params: params })
                .subscribe((dat: any) => {

                    console.log(dat);
                    if (dat.status && dat.status !== 200) {
                        console.log('rejecting')
                        reject(dat.message);
                    }

                    resolve(this.convertJSONToCoursesArray(dat));
                },
                    error => {
                        console.log(error);
                        reject(error.error.message);
                    });
        });
    }


    convertJSONToCoursesArray(data: any[]) {
        let courses: Course[] = [];
        data.forEach(element => {
            let course = new Course(element.ownerId, element.department, element.courseNum, element.section, element.term, element.year, element.room, element.building, element.startDate, element.endDate);
            course.setId(element._id);
            courses.push(course);
        });
        return courses;
    }


}
