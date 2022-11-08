import { Component, Input, OnInit } from '@angular/core';
import { Quiz } from '../quizzes/models/quiz';

@Component({
  selector: 'ft-quiz-detail',
  templateUrl: './quiz-detail.component.html',
  styleUrls: ['./quiz-detail.component.scss']
})
export class QuizDetailComponent implements OnInit {
  @Input() quiz?: Quiz;

  constructor() { }

  ngOnInit(): void {
  }

}
