import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoginUsuario } from 'src/app/models/login-usuario';
import { AutenticacionService } from 'src/app/service/autenticacion.service';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  email!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;

  constructor(private ruta:Router, private tokenService: TokenService, private authService: AuthService) { }


ngOnInit(): void {
  
  if(this.tokenService.getToken()){
    this.isLogged = true;
    this.isLogginFail = false;
    this.roles = this.tokenService.getAuthorities();
  }
}

onLogin(){
  this.loginUsuario = new LoginUsuario(this.email, this.password);
   this.authService.login(this.loginUsuario).subscribe(data => {
    this.isLogged = true;
    this.isLogginFail = false;
    this.tokenService.setToken(data.token);
    this.tokenService.setUsername(data.email);
    this.tokenService.setAuthorities(data.authorities);
    this.roles = data.authorities;
    this.ruta.navigate(['']);
   },
   err => {
    this.isLogged = false;
    this.isLogginFail = true;
    this.errMsj = err.error.mensaje;
    console.log(this.errMsj);
       })

   }
}

