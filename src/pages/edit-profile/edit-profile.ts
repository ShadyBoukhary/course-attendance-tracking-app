import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { UtilitiesProvider } from '../../providers/utilities/utilities';

/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  profile: User;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private data: DataServiceProvider, private utilities: UtilitiesProvider) {
  }

  async updateProfile(updatedData) {
    console.log(updatedData);
    let loader = this.utilities.createLoading('Updating profile...');
    loader.present();

    



    try {

      this.profile = await this.data.getUserProfile();
      console.log(this.profile);
      this.updateFields(updatedData);
      console.log(this.profile);
      let result = await this.data.updateUserProfile(this.profile);
      this.navCtrl.setRoot('CoursesPage');
   //   console.log(result);
    } catch(e) {
      console.log(e);
      this.utilities.createToast(e, 3000).present();
    }

    loader.dismiss();
    
  }

  updateFields(updatedData) {

    this.profile.setFirstName(updatedData.firstName);
    this.profile.setLastName(updatedData.lastName);
    this.profile.setTitle(updatedData.title);
    this.profile.setPhone(updatedData.phone);
    this.profile.setOffice(updatedData.office);
    this.profile.setDepartment(updatedData.department);
  }

}
