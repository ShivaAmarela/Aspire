import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private loadingCtrl: LoadingController) { }
  ngOnInit() {
  }

  login(){
    this.router.navigate(['/home/home/feed']);
  }

  showLoading(){
    this.loadingCtrl.create({
      message: "Loading ..."
    }).then((loading) => {
      loading.present();
    
      setTimeout(() => {
        loading.dismiss();
      }, 5000)
    })
  }

}
