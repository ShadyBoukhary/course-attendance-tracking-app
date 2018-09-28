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


    async uploadImage(image: string, classId) {

        // Get token and userId
        let jwt = await this.auth.getJWT();
        // Set Headers
        let headers = new HttpHeaders().set(StorageConstants.JSON_WEB_TOKEN, jwt);
        headers.set('Content-Type', 'application/json');

        let url = `${APIConstants.baseUrl}${APIConstants.createImageIUrl}`;
        let options: FileUploadOptions = {
            fileKey: 'image',
            chunkedMode: false,
            mimeType: 'multipart/form-data',
            params: {'classId': classId }
        };

        const fileTransfer: FileTransferObject = this.transfer.create();

        try {
            let result = await fileTransfer.upload(image, url, options)
            console.log(result);
        } catch (error) {
            throw error;
        }
        
    }


}
