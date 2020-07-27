import { Component, OnInit } from '@angular/core';

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
  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  async register(){
    const { username, password, confirmpassword } = this
    if(password !== confirmpassword) {
      return console.error("Passwords don't match")
    }
    try{
      const res = await this.afAuth.createUserWithEmailAndPassword(username, password)
      console.log(res)
    }catch(error) {
      console.dir(error)
    }
    }
    

}
