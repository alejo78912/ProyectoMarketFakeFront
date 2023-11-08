import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Utils } from 'src/app/utils/utils';
import { IniciarSesionService, LoginResponse } from 'src/app/iniciar-sesion.service';
import { LogInComponent } from 'src/app/log-in/log-in.component';

export const authGuard: CanActivateFn = async (route, state) => {
  const router = inject(Router)
  let resp = false
  const rol = inject(IniciarSesionService)
  //const login =inject(LogInComponent)
  console.log('Auth guard');
  const email = sessionStorage.getItem('email')!
  await rol.login( email,"123456").subscribe(
    (response: LoginResponse) => {
      console.log(response);
      
      if (response && response.view  === 'adminView') {
        resp =  true;
        
      }
      else if(response && response.view && response.view === 'loginPage'){
        router.navigateByUrl('restricted')
        resp =  false
        console.log(response);
        
      } 
    }


    );
    return true
};