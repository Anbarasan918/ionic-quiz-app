import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { QuizquestionComponent } from './quizquestion/quizquestion.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
 {path:"",redirectTo:'/home',pathMatch: 'full'},
 {path:'home',component:HomePage},
 {path:'quizquestion',component:QuizquestionComponent},
 {path:'result',component:ResultComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
