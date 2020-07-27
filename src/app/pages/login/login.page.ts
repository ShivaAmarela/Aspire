import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = '';
  password: string  = '';
  constructor(public afAuth: AngularFireAuth, private router: Router, private loadingCtrl: LoadingController) { }
  ngOnInit() {
  }

  async login(){
    const { username, password} = this;
    try{
      
        const res = await this.afAuth.signInWithEmailAndPassword(username, password);
    } catch (err) {
      console.dir(err);
      if(err.code === "auth/user-not-found") {
          console.log("User not found")
      }
    }
    //this.router.navigate(['/home/home/feed']);
  }

  showLoading(){
    this.loadingCtrl.create({
      message: 'Loading ...'
    }).then((loading) => {
      loading.present();

      setTimeout(() => {
        loading.dismiss();
      }, 5000);
    });
  }

}
