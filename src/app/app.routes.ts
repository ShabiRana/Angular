import { Routes } from '@angular/router';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: '',
        component: LoginComponent
        },
    { path: 'forget-password',
      component: ForgetpassComponent
      },
    
    
    
  ];