import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckTutorial } from './providers/check-tutorial.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tutorial',
    pathMatch: 'full'
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./pages/support/support.module').then(m => m.SupportModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignUpModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./pages/tabs-page/tabs-page.module').then(m => m.TabsModule)
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./pages/tutorial/tutorial.module').then(m => m.TutorialModule),
    canLoad: [CheckTutorial]
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./pages/verification/verification.module').then( m => m.VerificationPageModule)
  },
  /*{
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },*/
  /*{
    path: 'loans',
    loadChildren: () => import('./pages/loans/loans.module').then( m => m.LoansPageModule)
  },*/
  {
    path: 'loan-verification',
    loadChildren: () => import('./pages/loan-verification/loan-verification.module').then( m => m.LoanVerificationPageModule)
  },
  {
    path: 'bank-detail',
    loadChildren: () => import('./pages/bank-detail/bank-detail.module').then( m => m.BankDetailPageModule)
  },
  {
    path: 'education-employment',
    loadChildren: () => import('./pages/education-employment/education-employment.module').then( m => m.EducationEmploymentPageModule)
  },
  {
    path: 'personal-information',
    loadChildren: () => import('./pages/personal-information/personal-information.module').then( m => m.PersonalInformationPageModule)
  },
  {
    path: 'photo-attach',
    loadChildren: () => import('./pages/photo-attach/photo-attach.module').then( m => m.PhotoAttachPageModule)
  },
  {
    path: 'loan-amount',
    loadChildren: () => import('./pages/loan-amount/loan-amount.module').then( m => m.LoanAmountPageModule)
  },
  {
    path: 'loan-submit',
    loadChildren: () => import('./pages/loan-submit/loan-submit.module').then( m => m.LoanSubmitPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
