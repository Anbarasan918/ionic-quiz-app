import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizdatashareService } from '../quizdatashare.service';

@Component({
  selector: 'app-quizquestion',
  templateUrl: './quizquestion.component.html',
  styleUrls: ['./quizquestion.component.scss'],
})
export class QuizquestionComponent implements OnInit {
showquesion;
currentQuestion:number=0;
correctcount=0;
wrongcount=0;


  constructor(private router:Router,private quizdatashareService:QuizdatashareService) { }
  

 
  ngOnInit() {
    if(this.quizdatashareService.selecteduser==1){
      this.showquesion=this.quizdatashareService.quiz1[this.currentQuestion]
    }else if(this.quizdatashareService.selecteduser==2){
      this.showquesion=this.quizdatashareService.quiz2[this.currentQuestion]
    }else if(this.quizdatashareService.selecteduser==3){
     this.showquesion=this.quizdatashareService.quiz3[this.currentQuestion]
    }
    
  }
  nextquestion(){
    this.currentQuestion++;
    if(this.quizdatashareService.selecteduser==1){
      this.showquesion=this.quizdatashareService.quiz1[this.currentQuestion]
      
      if(this.quizdatashareService.quiz1[this.currentQuestion-1].useranswer==this.quizdatashareService.quiz1[this.currentQuestion-1].answer){
       this.correctcount++
      }else{
        this.wrongcount++
      }
    }else if(this.quizdatashareService.selecteduser==2){
      this.showquesion=this.quizdatashareService.quiz2[this.currentQuestion]
     
      if(this.quizdatashareService.quiz2[this.currentQuestion-1].useranswer==this.quizdatashareService.quiz2[this.currentQuestion-1].answer){
      
        this.correctcount++
       }else{
         this.wrongcount++
       }
    }else if(this.quizdatashareService.selecteduser==3){
     this.showquesion=this.quizdatashareService.quiz3[this.currentQuestion]
     
     if(this.quizdatashareService.quiz3[this.currentQuestion-1].useranswer==this.quizdatashareService.quiz3[this.currentQuestion-1].answer){
      this.correctcount++
     }else{
       this.wrongcount++
     }
    }
 
  }
  previousquestion(){
    this.currentQuestion--;
    if(this.quizdatashareService.selecteduser==1){
      this.showquesion=this.quizdatashareService.quiz1[this.currentQuestion]
    }else if(this.quizdatashareService.selecteduser==2){
      this.showquesion=this.quizdatashareService.quiz2[this.currentQuestion]
    }else if(this.quizdatashareService.selecteduser==3){
     this.showquesion=this.quizdatashareService.quiz3[this.currentQuestion]
    }
  }
  summitData(){
    this.quizdatashareService.correctAnswer=this.correctcount+1;
    this.quizdatashareService.wrongAnswer=this.wrongcount;
    this.router.navigateByUrl('/result');
}

}
