import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { trigger, state, style, animate, transition } from '@angular/animations';


/**
 * Generated class for the CoursesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-courses',
  templateUrl: 'courses.html',
  animations: [
    trigger('visibilityChanged', [
      state('shown', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('* => *', animate('500ms'))
    ])
  ]
})
export class CoursesPage {

  visibility: String;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.visibility = 'hidden';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoursesPage');
  }

  animate() {
    console.log("hi");
    this.visibility = 'shown'
  }

}
