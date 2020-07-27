import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.page.html',
  styleUrls: ['./singup.page.scss'],
})
export class SingupPage implements OnInit {
 
  username: string;
  password: string;
  confirmpassword: string;
  private loading: any;
  constructor(public afAuth: AngularFireAuth,
              private loadingCtrl: LoadingController,
              private toastCtrl: ToastController,) { }

  ngOnInit() {
  }

  async showLoading(){
    this.loading = await  this.loadingCtrl.create({message: 'Loading...'});
    return this.loading.present();
  }
  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({message, duration: 2000});
    toast.present();
  }

  async register(){
    await this.showLoading();

    try {
      await this.afAuth.createUserWithEmailAndPassword(this.username, this.password)
    } catch (error) {
      let message: string;
      console.error(error);
      switch (error.code){
        case 'auth/argument-error':
        message = 'E-mail inválido!';
        break;
      }
      this.presentToast(message);
    } finally {
      this.loading.dismiss();
    }





    //codigo antigo pro register
    /*const { username, password, confirmpassword } = this
    if(password !== confirmpassword) {
      return console.error("Passwords don't match")
    }
    try{
      const res = await this.afAuth.createUserWithEmailAndPassword(username, password)
      console.log(res)
    }catch(error) {
      console.dir(error)
    }
    }*/
}

  }
