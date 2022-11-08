import { Component, OnInit } from '@angular/core';
import { Quiz } from './models/quiz';
import { QuizService } from './services/quiz.service';

@Component({
  selector: 'ft-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss']
})
export class QuizzesComponent implements OnInit {
  quizzes$ = this.quizService.getQuizzes();
  selectedQuiz?: Quiz;

  constructor(private quizService: QuizService) { }

  ngOnInit(): void { }

  onSelect(quiz: Quiz): void {
    this.selectedQuiz = quiz;
  }
}
