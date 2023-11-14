import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { IniciarSesionService } from 'src/app/iniciar-sesion.service';

export const employeeGuard: CanActivateChildFn = async (childRoute, state) => {
  const router = inject(Router);
  const rol = inject(IniciarSesionService);
  console.log('Auth guard');
  const email = sessionStorage.getItem('email')!;

  try {
    const response = await rol.findByEmail(email).toPromise();

    if (response && response.userType === 'Empleado') {
      const id: string = response.idUser.toString()
      localStorage.setItem('idUser', id) 
      return true;
     
    } else if (!response) {
      router.navigateByUrl('restricted');
      console.log(response);
      return false;
    }
    
  } catch (error) {
    console.error(error);
    router.navigateByUrl('restricted');
    return false;
  }

  return false;
};
