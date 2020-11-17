import { Component } from '@angular/core';
import { QuizdatashareService } from '../quizdatashare.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router,private quizdatashareService:QuizdatashareService) {}

gotoQuiz(i){
    this.quizdatashareService.selecteduser=i;
    this.router.navigateByUrl('/quizquestion');
  }

}
