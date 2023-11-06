import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Utils } from 'src/app/utils/utils';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const rol = Utils.getRole()

  if (rol !== '') {
    return true;
  }
  router.navigateByUrl('restricted')
  return false

};