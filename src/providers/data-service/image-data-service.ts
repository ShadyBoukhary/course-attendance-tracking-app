import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIConstants, StorageConstants } from '../constants';
import { AuthServiceProvider } from '../auth-service/auth-service';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';



@Injectable()
export class ImageDataServiceProvider {

    constructor(public http: HttpClient, private auth: AuthServiceProvider, private transfer: FileTransfer) {
        console.log('Hello DataServiceProvider Provider');
    }


    async uploadImage(image: string, classId, filename: string) {

        // Get token and userId
        let jwt = await this.auth.getJWT();
        // Set Headers
        let headers = new HttpHeaders().set(StorageConstants.JSON_WEB_TOKEN, jwt);
        headers.set('Content-Type', 'application/json');

        let url = `http://cs.mwsu.edu/~griffin/p-lot/bbats/app.php`;
        let options: FileUploadOptions = {
            fileKey: 'file',
            fileName: `${filename}.jpg`,
            params: {'classId': classId, jwt: jwt }
        };

        const fileTransfer: FileTransferObject = this.transfer.create();

        try {
            console.log('Uploading');
            let result = await fileTransfer.upload(image, url, options)
            console.log(JSON.stringify(result));
        } catch (error) {
            throw error;
        }
    }

    async getImageResults(filename: string): Promise<any> {

        // Get token and userId
        let jwt = await this.auth.getJWT();
        let userId = await this.auth.getCurrentUser();
    
        // Set Headers
        let headers = new HttpHeaders().set(StorageConstants.JSON_WEB_TOKEN, jwt);
    
        // Make HTTP Request
        return new Promise((resolve, reject) => {
          this.http.get(`http://45.32.197.143:8081/images/${filename}`, {headers: headers})
            .subscribe((result: any) => {
            //   if (result.status === '404') {
            //     reject(result.message);
            //   }
              console.log(JSON.stringify(result));
              resolve(result.result);
            },
              error => {
                console.log(JSON.stringify(error));
                reject(error.message);
              });
        });
      }

      async train(courseId: string): Promise<any> {

        // Get token and userId
        let jwt = await this.auth.getJWT();
        let userId = await this.auth.getCurrentUser();
    
        // Set Headers
        let headers = new HttpHeaders().set(StorageConstants.JSON_WEB_TOKEN, jwt);

        let params = new HttpParams();
        params.set('setupClass', courseId);
        // Make HTTP Request
        return new Promise((resolve, reject) => {
          this.http.get(`http://cs.mwsu.edu/~griffin/p-lot/bbats/app.php?setupClass=${courseId}`)
            .subscribe((result: any) => {
            //   if (result.status === '404') {
            //     reject(result.message);
            //   }
              console.log(JSON.stringify(result));
              resolve(result.result);
            },
              error => {
                console.log(JSON.stringify(error));
                reject(error.message);
              });
        });
      }
}
