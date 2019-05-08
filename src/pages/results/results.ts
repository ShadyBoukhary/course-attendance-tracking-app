import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {

  results: Result[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.results = [
      {
        name: 'Micah',
        status: true,
        highConfidence: true 
      },
      {
        name: 'Some dude',
        status: true,
        highConfidence: true 

      },
      {
        name: 'Garrett',
        status: true,
        highConfidence: true 

      },
      {
        name: 'Gap',
        status: true,
        highConfidence: true 

      }, 
      {
        name: 'Sai1',
        status: true,
        highConfidence: true 

      },
      {
        name: 'Sai2',
        status: true,
        highConfidence: false 
      },
      {
        name: 'Tanaka',
        status: true,
        highConfidence: true 
      },
      {
        name: 'Emmanuel',
        status: true,
        highConfidence: true
      },
      {
        name: 'Dan',
        status: true,
        highConfidence: true
      },
      {
        name: 'Sun',
        status: true,
        highConfidence: true
      },
      {
        name: 'Havila',
        status: false,
        highConfidence: false
      }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage');
  }

}

interface Result {
  name: string;
  status: boolean;
  highConfidence: boolean;
}
