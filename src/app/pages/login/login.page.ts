import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private loading: any;
  username: string = '';
  password: string  = '';
  constructor(public afAuth: AngularFireAuth,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,) { }
  ngOnInit() {
  }
  
  async showLoading(){
    this.loading = await  this.loadingCtrl.create({message: 'Loading...'});
    return this.loading.present();
  }
  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({message, duration: 2000,});
    toast.present();
}
  async login(){
    await this.showLoading();

    try {
      await this.afAuth.signInWithEmailAndPassword(this.username, this.password)
      this.router.navigate(['/home/home/feed']);
    } catch (error) {
      let message: string;
      console.error(error);
      switch (error.code){
        case 'auth/invalid-email':
        message = 'E-mail inválido!';
        break;
      }
      this.presentToast(message);
    } finally {
      this.loading.dismiss();
    }



    //codigo antigo de login:
    /*const { username, password} = this;
    try{
      
        const res = await this.afAuth.signInWithEmailAndPassword(username, password);
    } catch (err) {
      console.dir(err);
      if(err.code === "auth/user-not-found") {
          console.log("User not found")
      }
    }
    //this.router.navigate(['/home/home/feed']);
  }*/
}



}
