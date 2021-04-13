import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { ToastService } from '../service/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin : FormGroup;

  constructor(
    private fb : FormBuilder,
    private auth : LoginService,
    private route : Router,
    private toast: ToastService) {
    this.formLogin = this.fb.group({
      correo: ['',[
        Validators.required,
        Validators.email
      ]],
      clave: ['',[
        Validators.required,
        Validators.minLength(6)
      ]]
    });
  }

  ngOnInit() {

  }

  async onSubmit(){
    if(this.formLogin.valid){
      let data = this.formLogin.value;
      this.formLogin.disable();
      try {

          await this.auth.login(data.correo, data.clave);
          this.route.navigate(['./home']);

      } catch (error) {
        this.toast.presentToast('Cuenta invalida');
      }finally{
        this.formLogin.enable();
      }
    }
  }

  async fastAccess(correo, clave){
    this.formLogin.disable();
      try {
          await this.auth.login(correo, clave);
          this.route.navigate(['./home']);
      } catch (error) {
        this.toast.presentToast('Cuenta invalida');
      }finally{
        this.formLogin.enable();
      }
    }
}
