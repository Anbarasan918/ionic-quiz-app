import { Component, OnInit } from '@angular/core';
import { QuizdatashareService } from '../quizdatashare.service';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
correctansers;
wronganswers;
  constructor(public quizdatashareService:QuizdatashareService) { }

  ngOnInit() {
    this.correctansers=this.quizdatashareService.correctAnswer;
    this.wronganswers=this.quizdatashareService.wrongAnswer
  }

}
