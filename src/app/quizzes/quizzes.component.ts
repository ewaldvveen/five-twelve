import { Component } from '@angular/core';
import { QuizService } from './services/quiz.service';

@Component({
  selector: 'ft-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss']
})
export class QuizzesComponent {
  quizzes$ = this.quizService.getQuizzes();

  constructor(private quizService: QuizService) { }
}
